import * as React from 'react';
import quotes  from './quotes';
import FancyText from './FancyText';
import inspirations from './inspirations';
import Color from './Color';

export default function InspiratinGenerator({children}) {
    const [index, setIndex] = React.useState(0);
    // const quote = quotes[index];
    const inspiration = inspirations[index];
    const next = () => setIndex((index + 1) % quotes.length);

    return (
        <>
            <p>
                Your inspirational quote is:
            </p>
            {
                inspiration.type === 'quote'
                ?<FancyText text={inspiration.vaule} />
                :<Color value={inspiration.value} />
            }

            {/* <FancyText text={quote}/> */}
            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    )
}