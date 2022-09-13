// import logo from './logo.svg';
import './App.css';
import SimsonComponents from "./components/SimsonComponents";

function App() {
    return (
        <div className="123">
            <SimsonComponents key={`1`}
                              name={'Homer'}
                              img={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
                              info={'Homer Jay Simpson (born May 12, 1955, or 1969 or 1976 or 1983)[36] is the main protagonist of The Simpsons series (or show).' +
                                  ' He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), ' +
                                  'lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, ' +
                                  'and even bravery to those he cares about and, sometimes, even others he doesn\'t. ' +
                                  'He also serves as the main protagonist of the The Simpsons Movie. Homer Simpson is 39 years old.'}/>
            <SimsonComponents key={`2`}
                              name={'Marge'}
                              img={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
                              info={'Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11] is the homemaker and matriarch of the Simpson family. ' +
                                  'She is also one of the five main characters in The Simpsons TV series. Marge Simpson is 36 years old. She and her husband Homer have three children: Bart, Lisa, and Maggie. ' +
                                  'Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. ' +
                                  'Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'}

            />
            <SimsonComponents key={`3`}
                              name={'Bart'}
                              img={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
                              info={'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. ' +
                                  'He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". ' +
                                  'Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". ' +
                                  'Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.'}
            />
            <SimsonComponents key={`4`}
                              name={'Lisa'}
                              img={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
                              info={'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}

            />
            <SimsonComponents key={`5`}
                              name={'Maggie'}
                              img={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
                              info={'Margaret Evelyn[10] Lenny [11] "Maggie" Simpson (born December 17, 1989) is the 1-year-old daughter and youngest child of Marge and Homer Simpson, ' +
                                  'the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, ' +
                                  'she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. ' +
                                  'Maggie is the very young, infant age of 1.'}
            />
        </div>

    );
}

export default App;
