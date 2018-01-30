import {addMessage, removeMessage} from '../containers/App/actions'

export class MessageManager {
  static init (dispatch) {
    this.dispatch = dispatch
  }

  static addMessage (message) {
    const m = {
      message: message,
      id: Date.now()
    }
    this.dispatch(addMessage(m))
    setTimeout(() => {
      this.dispatch(removeMessage(m.id))
    }, 7000)
  }
}
