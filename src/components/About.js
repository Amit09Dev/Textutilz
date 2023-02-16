import React from 'react'

export default function About(props) {


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(45 86 112)' : 'white',
    }


    About.defaultProps = {
        mode: 'light'
    }

    return (
        <div className="container">
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>A brief note about TextUtilz</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}><p>Welcome to TextUtilz, the ultimate platform for text manipulation and formatting. Our website provides a user-friendly interface that allows you to format and manipulate your text in a variety of ways, providing the perfect solution for all your text editing needs.

                            Whether you're a writer, content creator, or just someone who needs to manipulate text for personal or professional purposes, TextUtilz has everything you need. Our advanced text editor allows you to format your text with ease, using a wide range of font styles, sizes, and colors. You can also add images, tables, and other elements to your text to create visually appealing documents and presentations.

                            With TextUtilz, you can also manipulate your text in a number of ways. Our text manipulation tools allow you to change the case of your text, remove duplicates, sort and shuffle lines, extract and replace text, and much more. Whether you need to clean up your data or create a unique format for your text, TextUtilz has you covered.

                            At TextUtilz, we understand that privacy and security are important to our users. That's why we take security and privacy very seriously, and our website is designed with the highest level of security in mind. Your data is stored securely, and we will never share or sell your information to third parties.

                            So why wait? Start using TextUtilz today, and experience the power of text manipulation and formatting like never before!</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use and browser compatibilty</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}><p>TextUtilz is a browser-based character counter and word/character limit tool that is completely free to use. It provides instant results and works seamlessly on any web browser, including Chrome, Firefox, Internet Explorer, Safari, and Opera. You can use TextUtilz to count characters in a variety of contexts, such as Facebook posts, blog articles, books, Excel documents, PDFs, essays, and more.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}