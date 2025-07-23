/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/common/Card.jsx":
/*!****************************************!*\
  !*** ./src/components/common/Card.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Card = ({
  card
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "box-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
        className: "shape-box shape-box_half",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: card?.imgUrl,
          alt: "card image"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "brk-abs-overlay z-index-0 bg-black opacity-60"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figcaption", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "show-cont",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
              className: "card-no",
              children: card?.cardNo
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
              className: "card-main-title",
              children: card.mainTitle
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "card-content",
            children: card?.content
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
            href: card?.link.href,
            target: card?.link?.target,
            className: "read-more-btn",
            children: card?.link.txt
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "after"
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/common/Style.jsx":
/*!*****************************************!*\
  !*** ./src/components/common/Style.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  styles
}) => {
  const {
    shapeBox,
    shapeBoxHalf,
    shapeBoxHalfBefore,
    shapeBoxImg,
    bgBlack,
    ShapeBoxHalfFigCaption,
    ShapeBoxHalfFigCaptionShowContent,
    cardNo,
    cardMainTitle,
    cardContent,
    readMoreBtn,
    readMoreBtnHover,
    shapeBoxHalfAfter,
    shapeBoxHalfBeforeHover,
    shapeBoxHalfHoverFigCaption,
    shapeBoxHalfHoverFigCaptionShowContent,
    shapeBoxHalfHoverAfter
  } = styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: `
        .shape-box {
	    display: ${shapeBox.display};
	    position:  ${shapeBox.position};
	    z-index:  ${shapeBox.zIndex};
	    max-width:  ${shapeBox.maxWidth};
        height:${shapeBox.height};
	    margin:  ${shapeBox.margin.top + " " + shapeBox.margin.right + " " + shapeBox.margin.bottom + " " + shapeBox.margin.left};
	    box-shadow:  ${shapeBox.boxShadow};
	    overflow:  ${shapeBox.overflow};
	    width:  ${shapeBox.width};
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
	border-radius: ${readMoreBtn.borderRadius};
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
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/components/settings/GeneralSettings.jsx":
/*!*****************************************************!*\
  !*** ./src/components/settings/GeneralSettings.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const GeneralSettings = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: "general"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettings);

/***/ }),

/***/ "./src/components/settings/StyleSettings.jsx":
/*!***************************************************!*\
  !*** ./src/components/settings/StyleSettings.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const StyleSettings = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    group: "styles"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSettings);

/***/ }),

/***/ "./src/sb-animated-card/block.json":
/*!*****************************************!*\
  !*** ./src/sb-animated-card/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/sb-animated-card","version":"0.1.0","title":"animated card block","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"align":["center","full","left","right","wide"]},"attributes":{"cards":{"type":"array","default":[{"imgUrl":"https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80","cardNo":"01","mainTitle":"Design","content":"Customer interactions, study and analysis of company branding through creative briefs. Creation of mock-up designs by using UI tools that simulate actions and pre-visualize the reactions.","link":{"txt":"Read More","href":"#","target":"_self"}}]},"styles":{"type":"object","default":{"shapeBox":{"display":"inline-block","position":"relative","zIndex":1,"maxWidth":"500px","height":"430px","margin":{"top":"30px","bottom":"30px","left":"10px","right":"10px"},"boxShadow":" 0 6px 30px 0 rgba(0,0,0, .12)","overflow":"hidden","width":"23.333%"},"shapeBoxHalf":{"overflow":"hidden","textAlign":"left"},"shapeBoxHalfBefore":{"content":"","position":"absolute","top":0,"left":0,"right":0,"bottom":0,"transform":"skewY(53.5deg)","transformOrigin":"top left","transition":"transform .4s","background":"#fff","zIndex":1},"shapeBoxImg":{"width":"100%","height":"100%","oObjectFit":"cover","objectFit":"cover"},"bgBlack":{"bgColor":"#000"},"ShapeBoxHalfFigCaption":{"position":"absolute","left":0,"right":0,"bottom":0,"padding":{"top":"0","bottom":"30px","left":"30px","right":"30px"},"transition":"transform .4s","transform":"translateY(100%)","zIndex":3},"ShapeBoxHalfFigCaptionShowContent":{"position":"absolute","bottom":"calc(100% + 30px)","left":"30px","right":"30px","transition":"bottom .4s"},"cardNo":{"fontSize":"36px","color":"#ffc107","padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"10px","bottom":"10px","left":"0","right":"0"}},"cardMainTitle":{"margin":{"top":"8px","bottom":"0","left":"0","right":"0"},"fontWeight":"700","fontSize":"24px","textTransform":"uppercase","color":"#292b2c"},"cardContent":{"color":"#9f9f9f","margin":{"top":"20px","bottom":"0","left":"0","right":"0"},"lineHeight":"22px","fontSize":"15px"},"readMoreBtn":{"border":{"width":"2px","color":"#db3236","style":"solid"},"fontSize":"14px","cursor":"pointer","padding":{"top":"10px","bottom":"10px","left":"20px","right":"20px"},"display":"inline-block","textTransform":"uppercase","letterSpacing":".08em","fontWeight":"600","position":"relative","-webkit-transition":"all 0.3s","-moz-transition":"all 0.3s","transition":"all 0.3s","background":"#db3236","color":"#fff","borderRadius":"2px","margin":{"top":"25px","bottom":"0","left":"0","right":"0"},"textDecoration":"none"},"readMoreBtnHover":{"background":"transparent","color":"#db3236"},"shapeBoxHalfAfter":{"position":"absolute","top":0,"left":0,"right":0,"bottom":0,"background":"#fdd744","opacity":0,"transition":"opacity .4s;"},"shapeBoxHalfBeforeHover":{"transform":"skewY(20deg)"},"shapeBoxHalfHoverFigCaption":{"transform":"translateY(0)"},"shapeBoxHalfHoverFigCaptionShowContent":{"bottom":"100%"},"shapeBoxHalfHoverAfter":{"opacity":"1"}}},"options":{"type":"object","default":{}}},"textdomain":"sb-animated-card","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/sb-animated-card/edit.js":
/*!**************************************!*\
  !*** ./src/sb-animated-card/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/sb-animated-card/editor.scss");
/* harmony import */ var _components_common_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Card */ "./src/components/common/Card.jsx");
/* harmony import */ var _components_settings_StyleSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/settings/StyleSettings */ "./src/components/settings/StyleSettings.jsx");
/* harmony import */ var _components_settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/settings/GeneralSettings */ "./src/components/settings/GeneralSettings.jsx");
/* harmony import */ var _components_common_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/common/Style */ "./src/components/common/Style.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function Edit({
  attributes,
  setAttributes
}) {
  const {
    cards,
    styles
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_settings_StyleSettings__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes,
      setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_settings_GeneralSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes,
      setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_common_Style__WEBPACK_IMPORTED_MODULE_6__["default"], {
        styles
      }), cards.map((card, idx) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_common_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
          card
        }, idx);
      })]
    })]
  });
}

/***/ }),

/***/ "./src/sb-animated-card/editor.scss":
/*!******************************************!*\
  !*** ./src/sb-animated-card/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sb-animated-card/index.js":
/*!***************************************!*\
  !*** ./src/sb-animated-card/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/sb-animated-card/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/sb-animated-card/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/sb-animated-card/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/sb-animated-card/style.scss":
/*!*****************************************!*\
  !*** ./src/sb-animated-card/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"sb-animated-card/index": 0,
/******/ 			"sb-animated-card/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksb_animated_card"] = globalThis["webpackChunksb_animated_card"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["sb-animated-card/style-index"], () => (__webpack_require__("./src/sb-animated-card/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map