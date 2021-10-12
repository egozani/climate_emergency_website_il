import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["form"]
    initialize() {
        this.isOpen = false
    }
    connect() {
        console.log("Hello, Stimulus!", this)
    }


    closeForm() {
        this.formTarget.classList.remove("open")
        this.isOpen = !this.isOpen;
    }
    openForm() {
        this.formTarget.classList.add("open")
        this.isOpen = !this.isOpen;
    }
}
