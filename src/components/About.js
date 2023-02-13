import React from 'react'

export default function About(props) {

    return (
        <div class="accordion container" id="accordionExample" >
            <div class="accordion-item" >
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h2  >About TextUtilz</h2>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Welcome to TextUtilz, the ultimate platform for text manipulation and formatting. Our website provides a user-friendly interface that allows you to format and manipulate your text in a variety of ways, providing the perfect solution for all your text editing needs.

                            Whether you're a writer, content creator, or just someone who needs to manipulate text for personal or professional purposes, TextUtilz has everything you need. Our advanced text editor allows you to format your text with ease, using a wide range of font styles, sizes, and colors. You can also add images, tables, and other elements to your text to create visually appealing documents and presentations.

                            With TextUtilz, you can also manipulate your text in a number of ways. Our text manipulation tools allow you to change the case of your text, remove duplicates, sort and shuffle lines, extract and replace text, and much more. Whether you need to clean up your data or create a unique format for your text, TextUtilz has you covered.

                            At TextUtilz, we understand that privacy and security are important to our users. That's why we take security and privacy very seriously, and our website is designed with the highest level of security in mind. Your data is stored securely, and we will never share or sell your information to third parties.

                            So why wait? Start using TextUtilz today, and experience the power of text manipulation and formatting like never before!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
