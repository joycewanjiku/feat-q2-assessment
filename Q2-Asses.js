//1.**Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// input
// length
// morallesons
// agegroup

// output
// record oral stories 
// and translate them into difrrent languages

// Process
// creating a class 
// attributes that has 
// length
// morallesons
// agegroup
// then create objects 



class AncestralStroies{
    constructor(length,morallesons,agegroup){
        this.morallesons=length;
        this.morallesons=morallesons;
        this.agegroup=agegroup;
    } 
    getDEsig(){
        let strory=[]
      let story1 =  new AncestralStroies
      story1.push
    }
    
}


// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

// Input
// ingrediennts
// preparationtime
// cookingmethod
// nutritionalinformation


// ouput
//  an a that can handle Recipes from different African countries

// Processing
// creat a class
// atributes wich are ingrediennts
// preparationtime
// cookingmethod
// nutritionalinformation then creat  subclasses for different types of recipes
// each with their own unique properties and
// methods 

class Recipe{
    constructor(ingrediennts,preparationtime,cookingmethod,nutritionalinformation){
        this.ingrediennts=ingrediennts;
        this.preparationtime=preparationtime;
        this.cookingmethod=cookingmethod;
        this.nutritionalinformation=nutritionalinformation;
    }
 
        }
        class  MoroccanRecipe extends Recipe{
            constructor(name,ingrediennts, preparationtime,methods,nutritiona){
                this.spiceLevel=spiceLevel
       
            }
        }
           
        


// 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to
// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

// input
//diet
// typical lifespan
// Migration patterns

// output
// Tracking diffrent species
// 

// Process
// creating a class 
// attributes that has 
// input
//diet
// typical lifespan
// Migration patterns

class WildlifePreservation{
    constructor(diet,typicallifespan,migrationpatterns){
        this.diet=diet;
        this.typicallifespan=typicallifespan;
        this.migrationpatterns=migrationpatterns;
    }
    getDifferentSpecies(){
        if(this.diet===this.typicallifespan){

        }

    }
    
}


// 4. **African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.


// input
// Artist
// Performance
// stage

// output
// Manage the festival  lineup
// schedule and stage arrangements 


// Process
// creating a class 
// attributes that has
// Artist
// Performance
// stage 
//create subclasses that will inhwrit from the main class
// 
class MusicFestival{
    constructor(artist,Perfomance,stage){
        this.artist=artist;
        this.Perfomance=performance;
        this.stage=stage;
    }
    checkSchedule(){
        const performance="second"
        if(this.artist===this.performance){
            return("welcome to the stage")
          

        }
        else{
            return("wait for your turn")
        }
    }
}
// 5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.

// Input
// name
// price
// quantity

// Output
//  getting product details according 

//  Process
//  craeting a class called class Product that has  attributes  wich are name price and quantity
//  method that will help in calculating the total values
 
class Product{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}
// 6. Implement a class called Student with attributes for name, age, and grades (a
// list of integers). Include methods to calculate the average grade, display the
// student information, and determine if the student has passed (average grade >=
// 60). Create objects for the Student class and demonstrate the usage of these
// methods.

// Input
// Name
// age
// Grades

// output
// Displays the student information and determine if the student has passed


// Process
// creat a class  name it class Student that has attributes wich are Name
// age
// // Grades
// have methods that will help in calculating the avarage grade
//  display the student information, and determine if the student has passed
//  Create objects for the Student class 




class Student{
    constructor(name,age,avaragegradegs){
        this.name=name;
        this.age=age;
        this.avaragegrade=this.avaragegrades;

    }

}


// 7. Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

// Input
// destination
// date

// Output
// A Flight booking system

//  Process
//  creating a class called class FlightBooking taht has attributes wich are destination of the flight and the date
//   method to search for available flights 

class FlightBooking{
    constructor(destination,date){
       this. destination=destination;
       this.date=date;
    }
    getFlightDestination(){

    }
}

// 8. Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

// Input
// title
// auther

// output
// Keep track of available copies and display book details

// Process
// create class called ManadingBooks
// has  attributes wich are the title and auther
// methods to add new books, search for books

class ManagingBooks{
    constructor(title,auther){
        this.title=title;
        this.outher=auther;
    }
    getAddBooks(){

    }
}