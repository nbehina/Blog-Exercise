
class Article {
    constructor ( title = 'Blog Title', content = 'Lorem ipsum...' )
    {
      this.title = title;
      this.content = content;
    }
    output ( element = null)
    {
    if ( element !== null )
    {
        element.innerHTML += `
        <dl>
          <dt>Blog Title:</dt>
          <dd>${this.title}</dd>
          <dt>Lorem ipsum...:</dt>
          <dd>${this.content}</dd>
        </dl>
      `;
    }
  }
}
const myFirstBlog = new Article();  

const blogArticles = [
  new Article(
    'First Day of Class (C#)',
    'Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!'
  ),
  new Article(
    'How to Build Websites! (HTML)',
    'What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website.'
  ),
  new Article(
    'Brand new Topic (CSS)',
    'Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles.'
  ),
  new Article(
    'Another New Topic!? (JS)',
    'Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage.'
  ),
  new Article(
    'Adding on to our JS (TS)',
    'Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!'
  ),
  new Article(
    'Time to React',
    'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we\'re getting the hang of it!'
  )
];

// TODO: Add a new article to the array (add "SASS" inbetween the "CSS" and "JS" articles.)
blogArticles.splice( 2, 0, 'SASS');


// for ( let article of blogArticles )
// {
//   // TODO: Loop through articles and output each of them to the browser.
// }

const myElement = document.body; 
blogArticles.output( myElement );
const myBlog  = [ myFirstBlog, blogArticles];

for ( let article of blogArticles ) { 
console.log( article ); 
article.output( myElement); 
}
const productForm = document.querySelector( '#blog-form' );
const productTitleField = document.querySelector( '[name="title"]' );
const productContentField = document.querySelector( '[name="content"]' );
const productSection = document.querySelector( 'section' );

productForm.addEventListener( 'submit', event => {
  event.preventDefault();
const productTitleFieldValue = productTitleField.value;
const productContentFieldValue = productContentField.value;

const newArticle = new Article(
  productTitleFieldValue,
  productContentFieldValue
);

  newArticle.output(myBlog); 
} );
