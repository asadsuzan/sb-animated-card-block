import { createRoot } from 'react-dom/client'
import Card from '../components/common/Card';


document.addEventListener('DOMContentLoaded', function () {

    const roots = document.querySelectorAll('.wp-block-create-block-sb-animated-card')

    roots.forEach((wpRoot) => {

        const root = createRoot(wpRoot);
        const { cards, options, styles } = JSON.parse(wpRoot.dataset.attrs)

        console.log(cards);
        root.render(
            <div>
                <Card />
            </div>


        )


    })






})