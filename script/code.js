// const app = Vue.createApp({
    
//     data: function(){
//         return{
//             fullname: 'Ridhaa Benjamin',
//             isVisible: true
//         }
//     },
// });

// app.mount('#app');

const app = Vue.createApp({
    template:`
    <form onsubmit="event.preventDefault()">
        <input type='text' placeholder='Enter your name' id='name'/>
        <input type='number' placeholder='Enter your age' id='age'/>
        <button v-on:click="display">Click</button>
        <div id=output> 
        </div>
    </form>
    `,
    data: function(){
        return{
            name: '',
            age: '',
            w: 'Your old enough',
            l: 'Your too young'
        }
    },
    methods: {
        display(){
            if(age.value > 17){
                document.getElementById('output').innerHTML = `<h1>${this.w}</h1>`
            }else{
                document.getElementById('output').innerHTML = `<h1>${this.l}</h1>`
            }
        }
    }    
});

app.mount('#app');


