import { Controller } from "stimulus"

export default class extends Controller {
  initialize() {
    this.isOpen = false
  }
  connect() {
    console.log("Hello, Stimulus!", this)
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log("The menu is " + this.isOpen)
  }
}
