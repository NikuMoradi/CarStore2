//define elements
let $ = document
 //form elements
let nameInputElem = $.getElementById('name')
let yearInputElem= $.getElementById('year')
let priceInputElem = $.getElementById('price')
let addBtnElem = $.getElementById('addBtn')
let dltAllBtnElem = $.getElementById('dltAllBtn')
 //list elements
let ulElem = $.getElementsByClassName("boxContainer2")[0]
let liElem = $.getElementsByClassName("details")
let nameLabelElem= $.getElementsByClassName('nameLabel')
let yearLabelElem= $.getElementsByClassName('yearLabel')
let priceLabelElem= $.getElementsByClassName('priceLabel')
let dltBtnElem = $.getElementsByClassName('dlt')[0]
let editBtnElem = $.getElementsByClassName('edit')
let imageElem=$.getElementsByClassName(".carPhoto")
let cars=[]

addBtnElem.addEventListener('click', function addingCar(){
        let nameValue= nameInputElem.value
        let yearValue=yearInputElem.value 
        let priceValue = priceInputElem.value
        let carObj =
            {
                id:cars.length +1 ,
                name:nameInputElem.value ,
                year:yearInputElem.value,
                price:priceInputElem.value ,
            }
        cars.push(carObj)//add object to array
        setLocalStorage(cars)//add array to localstorage
        createBox(cars)//make a box with elements
        makeEmpty() //reset inputs
        nameInputElem.focus() //focus on name input after addCar
        
})

//localStorageFunction
function setLocalStorage(carList) {
        localStorage.setItem('addToStorage', JSON.stringify(carList))
}
//make empty after click
function makeEmpty(){
        nameInputElem.value=''
        yearInputElem.value=''
        priceInputElem.value=''
}
//generator func
function createBox(carList){

        carList.forEach(function(car){
                //new list
                let newList = $.createElement('li')
                newList.className = 'details'
                //new name
                let newNameLabel = $.createElement('label')
                newNameLabel.className = 'nameLabel'
                newNameLabel.innerHTML = car.name
                //new year
                let newYearLabel = $.createElement('label')
                newYearLabel.className = 'yearLabel'
                newYearLabel.innerHTML = car.year
                //new price
                let newPriceLabel = $.createElement('label')
                newPriceLabel.className = 'priceLabel'
                newPriceLabel.innerHTML = car.price
                //new delete button
                let newDeleteBtn = $.createElement('button')
                newDeleteBtn.className ='dlt'
                newDeleteBtn.innerHTML='Delete'
                //new edit button
                let newEditBtn = $.createElement('button')
                newEditBtn.className ='edit'
                newEditBtn.innerHTML= 'Edit'
                //new car photo
                let newImage = $.createElement('img')
                //append 
                newList.append(newNameLabel,newYearLabel,newPriceLabel,newDeleteBtn,newEditBtn,newImage)
                ulElem.append(newList)
                // dltBtnElem.setAttribute('onclick' , 'removeItem(' + car.id + ')' )



        })

        dltBtnElem.addEventListener('click', function() {
                this.parentElement.remove();
        })
        
}




    

