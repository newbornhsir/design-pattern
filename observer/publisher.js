/**新闻发布者， 
 * publisher 可以发布消息，让其它用户订阅消息，移除订阅
 */
const newsPublisher = {
    subs: {
        base: []
    },
    subscribe (newsType, cb) {
        if (!this.subs[newsType]) {
            /**订阅一个新的新闻类型 */
            this.subs[newsType] = []
        }
        this.subs[newsType].push(cb)
    },
    unSubscribe(newsType, cb) {
        /**取消订阅 */
        let cbs = this.subs[newsType]
        if (cbs) {
            let index = cbs.indexOf(cb)
            cbs.splice(index,1)
        }
    },
    publisher (newsType) {
        let cbs = this.subs[newsType]
        if (cbs) {
            cbs.forEach(cb => cb())
        }
    }
}

class Person {
    constructor (cb) {
        this.cb = cb
    }
    subscribe (newType) {
        newsPublisher.subscribe(newType, this.cb)
    }
    unSubscribe (newType) {
        newsPublisher.unSubscribe(newType, this.cb)
    }
}

p1 = new Person(()=>console.log('p1 know'))
p2 = new Person(()=>console.log('p2 know'))
p1.subscribe('base')
p2.subscribe('base')
newsPublisher.publisher('base')
p2.unSubscribe('base')
newsPublisher.publisher('base')
