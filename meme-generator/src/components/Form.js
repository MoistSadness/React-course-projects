import React from 'react'
//import memesData from '../memesData.js'

export default function Form() {
    // Set state for meme object
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    })
    
    // Create a state variable to store meme array
    const [allMemes, setAllMemes] = React.useState({})

    // Fetch memes from API
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((data) => setAllMemes(data.data.memes));
            console.log(allMemes)
    }, [])

    function getMemeImage(event) {
       event.preventDefault()
        /*
        for (let meme of memesData.data.memes){
            console.log(meme)
        }
        */
        const randIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randIndex].url
        console.log(url)
        setMeme(prevState => { return {
            ...prevState,
            randomImg: url,
            }
        })
    }

    function handleChange(event){
        const {name, type, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    console.log(meme)
    
    return (
        <div className='form-container'>
            <form className='form'>
                <input 
                    name='topText'
                    type='text' 
                    onChange={handleChange}
                    value={meme.topText}
                    placeholder='Top text' 
                />
                <input 
                    name='bottomText'
                    type='text' 
                    onChange={handleChange}
                    value={meme.bottomText}
                    placeholder='Bottom text' 
                />
                <button 
                    onClick={getMemeImage} 
                    className='submit-button'
                ><b>Get new meme image</b></button>
            </form>
            <div className='meme'>
                <img src={meme.randomImg} className='memeImage' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

/* Old form
return (
        <div className='form-container'>
            <form className='form'>
                <input type='text' placeholder='Shut up' />
                <input type='text' placeholder='and take my money' />
                <button className='submit-button'><b>Get new meme image</b></button>
            </form>
        </div>
    )
*/