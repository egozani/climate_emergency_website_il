import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["menu"]

  initialize() {
    this.isOpen = false
  }
  connect() {
    console.log("Hello, Stimulus!", this)
  }

  toggleMenu() {
    if (this.isOpen) {
      this.menuTarget.classList.remove("open")
    }
    else {
      this.menuTarget.classList.add("open")
    }
    this.isOpen = !this.isOpen;
    console.log("The menu is " + this.isOpen)
  }
}
