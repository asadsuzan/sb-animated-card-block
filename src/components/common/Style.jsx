const Style = ({ styles }) => {
	const { sbWrapper, shapeBox, shapeBoxHalf, shapeBoxHalfBefore, shapeBoxImg, bgBlack, ShapeBoxHalfFigCaption, ShapeBoxHalfFigCaptionShowContent, cardNo, cardMainTitle, cardContent, readMoreBtn, readMoreBtnHover, shapeBoxHalfAfter, shapeBoxHalfBeforeHover, shapeBoxHalfHoverFigCaption, shapeBoxHalfHoverFigCaptionShowContent, shapeBoxHalfHoverAfter } = styles

	return <style dangerouslySetInnerHTML={{
		__html: `

		.sb-wrapper {
			gap: ${sbWrapper.gap};
			display: ${sbWrapper.display};
			grid-template-columns: repeat(${sbWrapper.columns}, minmax(0, 1fr));
			width: 100%;
}
        .shape-box {
	 
	    position:  ${shapeBox.position};
	    z-index:  ${shapeBox.zIndex};
	    max-width:  ${shapeBox.maxWidth};
        height:${shapeBox.height};
	    margin:  ${shapeBox.margin.top + " " + shapeBox.margin.right + " " + shapeBox.margin.bottom + " " + shapeBox.margin.left};
	    box-shadow:  ${shapeBox.boxShadow};
	    overflow:  ${shapeBox.overflow};
	    width:  ${shapeBox.width};
		border-radius:${shapeBox.borderRadius}px
}
        
        .shape-box_half {
	        overflow: ${shapeBoxHalf.overflow};
	        text-align: ${shapeBoxHalf.textAlign};
                
        }

        
 
    .shape-box_half:before {
	        content: "";
	        position: ${shapeBoxHalfBefore.position};
	        top: ${shapeBoxHalfBefore.top};
	        left: ${shapeBoxHalfBefore.left};
	        right: ${shapeBoxHalfBefore.right};
	        bottom: ${shapeBoxHalfBefore.bottom};
	        transform: ${shapeBoxHalfBefore.transform};
	        transform-origin:${shapeBoxHalfBefore.transformOrigin};
	        transition:${shapeBoxHalfBefore.transition};
	        background: ${shapeBoxHalfBefore.background};
	        z-index: ${shapeBoxHalfBefore.zIndex};
}
        
        
    .shape-box>img {
	        width: ${shapeBoxImg.width};
	        height:${shapeBoxImg.height};
	        -o-object-fit: ${shapeBoxImg.oObjectFit};
	        object-fit: ${shapeBoxImg.objectFit};
}
        
       .bg-black {
	        background-color: ${bgBlack.bgColor};
    } 
        
        
        .shape-box_half figcaption {
	        position: ${ShapeBoxHalfFigCaption.position};
	        left: ${ShapeBoxHalfFigCaption.left};
	        right: ${ShapeBoxHalfFigCaption.right};
	        bottom: ${ShapeBoxHalfFigCaption.bottom};
            padding: ${ShapeBoxHalfFigCaption.padding.top + " " + ShapeBoxHalfFigCaption.padding.right + " " + ShapeBoxHalfFigCaption.padding.bottom + " " + ShapeBoxHalfFigCaption.padding.left};
	        transition: ${ShapeBoxHalfFigCaption.transition};
	        transform:${ShapeBoxHalfFigCaption.transform};
	        z-index: ${ShapeBoxHalfFigCaption.zIndex};
}
        
        .shape-box_half figcaption .show-cont {
	        position: ${ShapeBoxHalfFigCaptionShowContent.position};
	        bottom: ${ShapeBoxHalfFigCaptionShowContent.bottom};
	        left: ${ShapeBoxHalfFigCaptionShowContent.left};
	        right: ${ShapeBoxHalfFigCaptionShowContent.right};
	        transition: ${ShapeBoxHalfFigCaptionShowContent.transition};
}
       

     .card-no {
		font-size: ${cardNo.fontSize};
		color: ${cardNo.color};
		padding: ${cardNo.padding.top + " " + cardNo.padding.right + " " + cardNo.padding.bottom + " " + cardNo.padding.left};
		margin: ${cardNo.margin.top + " " + cardNo.margin.right + " " + cardNo.margin.bottom + " " + cardNo.margin.left};
		font-weight:${cardNo.fontWeight}
}

.card-main-title {
		margin: ${cardMainTitle.margin.top + " " + cardMainTitle.margin.right + " " + cardMainTitle.margin.bottom + " " + cardMainTitle.margin.left};
	font-weight: ${cardMainTitle.fontWeight};
	font-size: ${cardMainTitle.fontSize};
	text-transform: ${cardMainTitle.textTransform};
	color: ${cardMainTitle.color};
}



    .card-content {
	color: ${cardContent.color};
	margin: ${cardContent.margin.top + " " + cardContent.margin.right + " " + cardContent.margin.bottom + " " + cardMainTitle.margin.left};
	line-height: ${cardContent.lineHeight};
	font-size: ${cardContent.fontSize};
	text-transform:${cardContent.textTransform}
}


  .read-more-btn {
	border: ${readMoreBtn.border.width + " " + readMoreBtn.border.style + " " + readMoreBtn.border.color};
	font-size: ${readMoreBtn.fontSize};
	cursor: ${readMoreBtn.cursor};
	 padding: ${readMoreBtn.padding.top + " " + readMoreBtn.padding.right + " " + readMoreBtn.padding.bottom + " " + readMoreBtn.padding.left};
	display: ${readMoreBtn.display};
	text-transform: ${readMoreBtn.textTransform};
	letter-spacing: ${readMoreBtn.letterSpacing};
	font-weight:${readMoreBtn.fontWeight};
	position: ${readMoreBtn.position};
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition:${readMoreBtn.transition};
	background: ${readMoreBtn.background};
	color: ${readMoreBtn.color};
	border-radius: ${readMoreBtn.borderRadius}px;
	 margin: ${readMoreBtn.margin.top + " " + readMoreBtn.margin.right + " " + readMoreBtn.margin.bottom + " " + readMoreBtn.margin.left};
	text-decoration: ${readMoreBtn.textDecoration};
}

         
.read-more-btn:hover {
	background: ${readMoreBtnHover.background};
	color: ${readMoreBtnHover.color};

}

  .shape-box_half>.after {
	position: ${shapeBoxHalfAfter.position};
	top:${shapeBoxHalfAfter.top};
	left: ${shapeBoxHalfAfter.left};
	right: ${shapeBoxHalfAfter.right};
	bottom: ${shapeBoxHalfAfter.bottom};
	background: ${shapeBoxHalfAfter.background};
	opacity: ${shapeBoxHalfAfter.opacity};
	transition: ${shapeBoxHalfAfter.transition};
}


.shape-box_half:hover:before {
	transform: ${shapeBoxHalfBeforeHover.transform};
}
.shape-box_half:hover figcaption {
	transform: ${shapeBoxHalfHoverFigCaption.transform};
}



.shape-box_half:hover figcaption .show-cont {
	bottom: ${shapeBoxHalfHoverFigCaptionShowContent.bottom};
}


.shape-box_half:hover>.after {
	opacity: ${shapeBoxHalfHoverAfter.opacity};
}




        `
	}}>

	</style>




}

export default Style