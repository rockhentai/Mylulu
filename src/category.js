import min from 'min';
import Model from 'min-model';
import myluBucket from './myluBucket';

Model.use(min);

const Category = Model.extend('category',{
  title:String,
  name:String,
  subtitle:String,
  cover:String
});

let ready = false;

Category.load = function() {
  //从本地数据库中读取以存储的分类数据
  return Category.allInstances()
    .then(categories => {
      if(categories.length > 0) {
        //如果本地数据库中已存在数据，就将其传递到下一个Promise对象中
        ready = true;
        return categories;
      } else {
        //从七牛云加载最新数据
        return myluBucket.getFile('categories.json')
          .then(body => JSON.parse(body))
      }
    })
    .then(categories => {
      return Promise.all(
        categories.map(category => {
          if(!ready) {
            //将数据转换为min-model中的实例，并保存在数据库中
            return new Promise(resolve => {
              const _category = new Category(category._key,category);
              _category.once('ready',() => resolve(_category));
            })
          } else {
            return category
          }
        })
      )
    })
    .catch(error => [])
}

Category.loadIfNotInit = function() {
  if(!ready) {
    return Category.load();
  } else {
    return Promise.resolve();
  }
}
