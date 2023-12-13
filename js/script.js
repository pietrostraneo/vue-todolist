const { createApp } = Vue

createApp({
    data() {
      return {
        logo:"./img/reminders.png",
        newText:"",
        newRem: false,
        todo:[
            {
                text: "Comprare il pane",
                check: false
            },
            {
                text: "Pulire il garage",
                check: false
            },
            {
                text: "Fare rifornimento al pandino",
                check: false
            },
            {
                text: "Svolgere esercizio del giorno",
                check: true
            },
            {
                text: "Andare in palestra",
                check: false
            },
            {
                text: "Comprare i regali di natale",
                check: false
            },
        ]
      }
    },
    methods:{
        deleteTask(index){
            let confirmation = confirm("Are you sure you want to delete this reminder?");
            if(confirmation){
                this.todo.splice(index,1)
            }
        },
        addRem(){
            if(this.newText == ""){
                alert(`Non puoi lasciare vuoto questo campo`)
            }
            else{
                let newReminder = {
                    text: this.newText,
                    done: false
                }
                this.todo.push(newReminder);
                this.newText = "";
            }
        }
    }
  }).mount("#app")
