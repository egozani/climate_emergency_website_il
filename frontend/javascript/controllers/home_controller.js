import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["form"]
    initialize() {
        this.isOpen = false
    }
    connect() {
      this.hidePartners()
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
      console.log("hidePartners");
      const icons = document.querySelectorAll(".partner-icon");
      console.log(icons);
      icons.forEach((icon, i) => {
        if (parseInt(icon.dataset.index) > 6) {
          console.log("hidden");
          icon.classList.add("hidden")
        }
      });

    }
}
