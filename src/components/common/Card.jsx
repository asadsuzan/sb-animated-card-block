import { produce } from 'immer'
const Card = ({ card, isBackend = false, options, setAttributes, attributes, idx }) => {

    const { selectedCardIdx } = options || {}


    const handleSelectedCard = () => {
        if (isBackend) {
            setAttributes(produce(attributes, draft => {
                draft.options.selectedCardIdx = idx
            }))
        } else {
            return
        }
    }


    return <>

        <div className="box-wrapper" onClick={handleSelectedCard}>
            <figure className="shape-box shape-box_half" >
                <img src={card?.imgUrl} alt="card image" />
                <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                <figcaption>
                    <div className="show-cont">
                        <h3 className="card-no">{card?.cardNo}</h3>
                        <h4 className="card-main-title">{card.mainTitle}</h4>
                    </div>
                    <p className="card-content">{card?.content}</p>

                    <a href={card?.link.href} target={card?.link?.target} className="read-more-btn">{card?.link.txt}</a>
                </figcaption>
                <span className="after"></span>
            </figure>

        </div>

    </>

}

export default Card