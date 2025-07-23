import { createRoot } from 'react-dom/client'
import Card from '../components/common/Card';
import Style from '../components/common/Style';


document.addEventListener('DOMContentLoaded', function () {

    const roots = document.querySelectorAll('.wp-block-create-block-sb-animated-card')

    roots.forEach((wpRoot) => {

        const root = createRoot(wpRoot);
        const { cards, options, styles } = JSON.parse(wpRoot.dataset.attrs)

        console.log(cards);
        root.render(
            <>
                <Style {...{ styles }} />

                <div className='sb-wrapper'>
                    {
                        cards.map((card, idx) => {
                            return <Card key={idx} {...{ card, options, idx, isBackend: false }} />
                        })
                    }
                </div>

            </>


        )


    })






})