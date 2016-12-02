import Model from 'min-model';

class ChineseStringIndexer extends Model.BaseIndexer {
  //异步标识
  get async() {return true}

  //索引建立
  indexMapper(val) {
    const url = `http://pullword.leanapp.cn/get?source=${encodeURIComponent(val)}&threshold=0.5&json=1`;
    return fetch(url)
      .then(res => res.json())
      .catch(() => [val])
  }
}

export default ChineseStringIndexer
