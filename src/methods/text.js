//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	// NOTE the choice here to support the setting of the text value
	//      where that functionality is ommited in html stems from the fact
	//      that it's trivially easy to do. One could make the case that
	//      consistency is paramount, and it's worth considering
	dom.text = function( el, text ) {
		// NOTE see readme about invocation patterns
		var e = this._e ? (text = el, this._e) : el,
			nodeType = e.nodeType,
			ret = "";

		// if the text value is provided clean out the contents
		// of the element under operation and add a new text node
		if( text ) {
			dom.empty( e );
			dom.append( e, (e.ownerDocument || document).createTextNode(text) );
		} else {
			// NOTE taken directly from the sizzle source
			if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
				// Use textContent for elements
				if ( typeof e.textContent === "string" ) {
					return e.textContent;
				} else {
					// Traverse its children
					for ( e = e.firstChild; e; e = e.nextSibling ) {
						ret += dom.text( e );
					}
				}
			} else if ( nodeType === 3 || nodeType === 4 ) {
				return e.nodeValue;
			}
		}

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");