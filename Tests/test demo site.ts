import { fixture, Selector } from "testcafe";
import { faker } from '@faker-js/faker';





const usernameInput = Selector('input[name=user-name][type=text]');
const passwordInput = Selector('input[name=password][type=password]');
const loginButton = Selector('input[id=login-button][type=submit]');
const firstItem = Selector('#add-to-cart-sauce-labs-backpack');
const secondItem= Selector('#add-to-cart-sauce-labs-bolt-t-shirt');
const cartButton= Selector('#shopping_cart_container');
const checkoutButton= Selector('#checkout');
const randomFristname= faker.name.firstName();
const randomLastname= faker.name.lastName();
const randomZipcode= faker.address.zipCode();
const continueButton= Selector('#continue');
const FinshButton= Selector('#finish');
const checkProductprice= Selector('.inventory_item_price')
const itmesVerife= Selector('#item_4_title_link')
const itmesVerife2= Selector('#item_1_title_link')








fixture `Access Demo Site`
     .page`https://www.saucedemo.com/`;
     


     test(`Automate Site Testing`, async t =>{

        //Here write  test code

    });


     test('logining to the site', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 


    } );   



     test('Check the price of product, ', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .expect(checkProductprice.exists).ok()



    } );   

    test('Add any two products into the cart ', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .click(firstItem)
        .click(secondItem)

    });


   
    test('Click cart icon in the top', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .click(firstItem)
        .click(secondItem)
        .click(cartButton)

    });


    test.only('Verify if the selected items are in the cart ', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .click(firstItem)
        .click(secondItem)
        .click(cartButton)
        .expect(itmesVerife.exists).ok()
        .expect(itmesVerife2.exists).ok()
        
       

    });


    test('Click checkout button', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .click(firstItem)
        .click(secondItem)
        .click(cartButton)
        .click(checkoutButton)
        
       

    });

    test('Provide a random firstname, lastname and a zip code in the next page ', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .click(firstItem)
        .click(secondItem)
        .click(cartButton)
        .click(checkoutButton)
        .typeText('#first-name',randomFristname)
        .typeText('#last-name',randomLastname)
        .typeText('#postal-code',randomZipcode)
     
        
    });

   

    test('Click ContinueButton  ', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .click(firstItem)
        .click(secondItem)
        .click(cartButton)
        .click(checkoutButton)
        .typeText('#first-name',randomFristname)
        .typeText('#last-name',randomLastname)
        .typeText('#postal-code',randomZipcode)
        .click(continueButton)

    
    }); 

    test('Click FinshButton  ', async t =>{
        await t
        .typeText(usernameInput,'performance_glitch_user')
        .typeText(passwordInput,'secret_sauce')
        .click(loginButton) 
        .click(firstItem)
        .click(secondItem)
        .click(cartButton)
        .click(checkoutButton)
        .typeText('#first-name',randomFristname)
        .typeText('#last-name',randomLastname)
        .typeText('#postal-code',randomZipcode)
        .click(continueButton)
        .click(FinshButton)

    
    }); 
              
            






    


      


             
   
   
   
   



