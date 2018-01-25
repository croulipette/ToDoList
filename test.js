const middleWare1 = function (next) {

    console.log('middleWare1');
    return next();

}
const middleWare2 = function (next) {

    console.log('middleWare2');
    return next();

}

const uneFonction = () => console.log('traitement')

//chaine()(uneFonction);

//middleWare2(uneFonction); --> OK
//middleWare1(() => middleWare2(uneFonction)); --> OK
//const chaine = () => middleWare1(() => middleWare2(uneFonction)); --> OK
//chaine();
//const chaine = (input) => middleWare1(() => middleWare2(input)); --> OK
//chaine(uneFonction);
//const chaine = (input) => middleWare1((input) => middleWare2);

const chaine = (uneFonction) => middleWare1(uneFonction)
chaine();