import { Controller } from "stimulus"
let batch = 1

export default class extends Controller {
    static targets = ["form"]
    initialize() {
        this.isOpen = false
    }
    connect() {
      // this.hidePartners()
      setInterval( () => this.switchIcons() , 3000)
    }


    closeForm() {
        this.formTarget.classList.remove("open")
        this.isOpen = !this.isOpen;
    }
    openForm() {
        this.formTarget.classList.add("open")
        this.isOpen = !this.isOpen;
    }

    hidePartners() {
      const icons = document.querySelectorAll(".partner-icon");
      icons.forEach((icon, i) => {
        if (parseInt(icon.dataset.index) > 6) {
          icon.classList.add("hidden")
        }
      });
    }

    switchIcons() {
      const icons = document.querySelectorAll(".partner-icon");
      console.log(batch);
      icons.forEach((icon, i) => {
        if (parseInt(icon.dataset.index) > (batch * 6) && parseInt(icon.dataset.index) <= ((batch + 1) * 6)) {
          icon.classList.add("fade")
        }
        else {
          icon.classList.remove("fade")
        }
      });
      if (batch > document.querySelector("#partner-icons").dataset.partnerSize - 2) {
        batch = 0
      }
      else {
        batch += 1;
      }
    }
}
