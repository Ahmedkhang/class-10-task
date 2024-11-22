import React from 'react';
import Image from 'next/image';
function Home(){
  



return(

    <div className="w-screen h-auto bg-blue-50 dark:bg-blue-700">

         <div className="w-[100%] md:flex flex-wrap">

            {/* card 1 */}
               <div className="w-[90%] md:w-[40%] lg:w-[20%] lg:m-20 h-[70vh] md:h-[65vh] lg:h-[60vh] md:items-center bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg ">
                  
                  <Image 
                   src="/product1.webp"
                   alt="Product 1"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">Fancy Trouser</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 550</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 2 */}
               <div className="w-[90%] md:w-[40%] lg:w-[20%] h-[70vh] md:h-[65vh] lg:m-20 lg:h-[60vh] bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg">
                  
                  <Image 
                   src="/product2.webp"
                   alt="Product 2"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">Shaver</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 250</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 3 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product3.webp"
                   alt="Product 3"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">Grindedr</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 650</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>
                                 {/* Card 4 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product4.webp"
                   alt="Product 4"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">School Bag</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 950</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 5 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product5.webp"
                   alt="Product 5"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">Wireless handfree</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 550</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 6 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product6.webp"
                   alt="Product 6"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">Fancy Tiffon</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 550</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 7 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product7.webp"
                   alt="Product 1"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">wireless headphone</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 550</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 8 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product8.webp"
                   alt="Product 8"
                   width={300}
                   height={200}
        

                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">hp Laptop</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 12,550</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 9 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product9.webp"
                   alt="Product 9"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">Vivo phone</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 15,500</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

               {/* Card 10 */}

               <div className="w-[90%] h-[65vh] md:h-[65vh] lg:m-20 lg:h-[60vh]  bg-blue-100 mt-10 m-5 md:m-7 rounded-lg shadow-lg md:w-[40%] lg:w-[20%]">
                  
                  <Image 
                   src="/product1.webp"
                   alt="Product 10"
                   width={300}
                   height={200}

                   
                   />
                   <p className="w-[100%] text-lg text-blue-500 text-center">Fancy Trouser</p>
                   <p className="w-[100%] text-lg text-red-500 text-center">PKR 550</p>

                   <div className="w-[100%] h-10 mt-2 text-center">
                    <button className="bg-blue-400 px-4 py-2 shadow-lg rounded-lg hover:bg-blue-100">Add to Cart</button>
                   </div>
                   

               </div>

         </div>

    </div>

)
}
export default Home;