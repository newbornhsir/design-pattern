 /**
  * 现在存在多个publisher，都可以添加订阅，移除订阅，发布订阅，
  * 这部分公用的抽象出一个类，叫做Dep，依赖管理器
  * 可以订阅的用户叫做watcher
  */
 class Dep {
     constructor () {
         this.sub = []
     }
     addSub (watcher) {
        /**添加 */
        let index = this.sub.indexOf(watcher)
        if (index === -1) {
            this.sub.push(watcher)
        }
     }
     removeSub () {
        let index = this.sub.indexOf(watcher)
        if (index !== -1) {
            this.sub.splice(index, 1)
        }
     }
     notify () {
         this.sub.forEach(sub => sub.update())
     }
 }

 class Watcher {
     constructor () {
        
     }
     update () {

     }
     addDep (dep) {
         dep.addSub(this)
     }
 }

