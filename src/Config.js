import min from 'min';
import myluBucket from './myluBucket.js';
import {isString} from 'lodash';

const Config = {
  load() {
    return min.exists('mylulu:config')
      .then(exists => {
        if(exists) {
          //如果存在数据库中存在缓存数据，那就从数据库中获取核心配置数据
          return min.hgetall('mylulu:config');
        } else {
          //不存在就从七牛云获取数据
          return myluBucket.getFile('config.json')
            .then(body => JSON.parse(body))
            .then(data => {
              ready = true;
              //将从七牛云获取到的数据存入数据库中
              min.hmset('mylulu:config',data);
              return data
            });
        }
      })
  },

  update(password,key,value) {
    //检查密码的变量类型
    if(!isString(password)) {
      throw new TypeError('Password must be a string');
    }

    //通过密码获取密钥
    return myluBucket.fetchPutToken(password)
      .then(putToken => {
        //加载旧的配置数据
        return load()
          .then(oldConfig => [oldConfig,putToken])
          //如果未初始化，就传递一个空对象
          .catch(() => [{},putToken])
      })
  }
}
