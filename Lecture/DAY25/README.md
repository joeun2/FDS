###### Front-End Develop SCHOOL

# DAY 25

##1. Capturing & Bubbling
- 예제

~~~html
var boxes = document.querySelectorAll('.box');
  var using_capture = !false; // capture or bubble
  var detectEventPropagation = function(ev) {
    console.log('this:', this);
    console.log('ev.target:', ev.target);
    console.log('ev.currentTarget:', ev.currentTarget);
    // 각 참조 변수(this, ev.target, ev.currentTarget) 값 비교
    // if ( this.firstElementChild.localName === 'a' ) {
    // if ( ev.target.firstElementChild.localName === 'a' ) {
    if ( ev.currentTarget.firstElementChild.localName === 'a' ) {
      // 브라우저의 기본 동작 차단
      ev.preventDefault();
    }
    if ( ev.currentTarget.classList.contains('child') ) {
      // console.log('this is child element');
      // 이벤트 전파 중지(stopPropagation)

      //bubble:자신이 아닌 부모로 거슬러 올라가는 이벤트 전파 중지
      // ev.stopPropagation();

      //이벤트 전파 즉시 중지!!
      //자신에게 걸린 이벤트 까지도 모두 전파 중지! (즉, 실행 안함)
      ev.stopImmediatePropagation();
    }
    console.log('%c------------------------------', 'color: #3d9a21');
  };
  var anotherEventPropagation;
  // boxes.forEach(function(box, idx) { // chrome web browser
  [].forEach.call(boxes, function(box, idx) { // modern web browser
    box.addEventListener('click', detectEventPropagation, using_capture);
    box.addEventListener('click', anotherEventPropagation , using_capture);
  });
~~~

## 2. jQuery
>손쉽고 간편한 JavaScript library
>
>- http://jquery.com/


**npm 설치**

	npm run install-jquery

**json 설치**

	npm init -y [json 파일생성]

	"scripts": {

	"install-jquery": "npm install --save jquery",

	"serve": "http-server -o -a localhost -p 9090" } [json 파일작성]
	
	npm run install-jquery  [실행]
	npm run serve 			[실행]

**라이브러리 다운로드**

	<script src="lib/jquery/jquery.js" ></script>`

**CDN사용**

	<script src="http://code.jquery.com/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

**로컬데이터를 사용하기 위한 조건문**

- 기본적으로 CDN데이터를 사용하되, 네트워크 불안정 또는 CDN이 폭파되었을 경우 사용 

**- 방법 1**

	if(!window.jQuery){
    	document.write ('<script src="./lib/jquery/jquery.min.js"><\/script>');
	}

**- 방법 2**

	window.jQuery || document.write ('<script src="./lib/jquery/jquery.min.js"><\/script>');

**- 방법 3**

	!window.jQuery && document.write ('<script src="./lib/jquery/jquery.min.js"><\/script>');







---
###1.1 
 




####1.4.1 비교연산 (Comparison Operations) 
크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=), 같다(==), 다르다(!=) 등 비교 연산 결과를 제공합니다.

~~~sass
1 < 20        // true
10 <= 20      // true
4 < 1         // false
4 >= 1        // true
1 + 1 == 2    // true
small != big // true
~~~

####1.4.2 문자연산 (String Operations)
문자와 문자를 접합하려는 경우 + 연산자를 사용할 수 있습니다.

~~~sass
li {
cursor: n + -resize; // n-resize
}
// " "를 붙이지 않아도 연산이 수행
~~~

####1.4.3 보간법(#{ }, Interpolation)
SASS는 변수를 “ ” 내부에서 처리할 수 있는 보간법을 지원합니다.

~~~sass
$family: "Droid+Sans";
@import url("http://fonts.googleapis.com/css?family=#{$family}");
@mixin do($selector, $message) {
 body #{$selector}::before {
 content: $message;
 }
//웹 폰트 CDN 사용시 보간법이 유용하게 활용
~~~

HTML에서 | 사용시 오류가 생기기 때문에 %7C로 바꿔줘야 함.

~~~html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abhaya+Libre|Open+Sans|Roboto">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abhaya+Libre%7COpen+Sans%7CRoboto">
~~~

####1.4.4 쿼리문 보간법 활용(#{ }) 
~~~sass
$information-phone: "only screen and (max-width : 320px)";
@media #{$information-phone} {
background: red;
}
~~~

###1.4.5 컬러 연산(Color Operations) 

~~~sass
p {
color: #010203 * 2;
/*  
    01 * 2 = 02
    02 * 2 = 04
    03 * 2 = 06
    ------------
    #020406
*/
} 
~~~

####1.4.6 기타 연산(Etc. Operations) 
불린 데이터 연산을 사용할 수 있습니다.

	불린(Boolean) 연산 지원: and, or, not
리스트(List) 연산 미지원.
<br />배열 객체의 length, join 등 유사 함수 지원.

- lenght($list) : 리스트의 길이를 돌려준다.
- nth() : 리스트에서 순서에 해당한것을 가져온다.
- join ($list1, $list2, [$separator]) : 합친다.
- append($list1, $val) : 리스트 뒤에 집어넣는다. (push와 비슷)

---
###1.5 믹스인 (@mixin)
코드를 섞는다.
 
JS 함수와 흡사한 믹스인은 @mixin으로 모듈을 정의한 후, @include로 호출할 수 있어 재사용이 가능합니다.

- @mixin : 믹스인을 정의.
- @include : 믹스인을 호출.

~~~sass
 @mixin box-sizing {
 	-webkit-box-sizing: border-box;
 		-moz-box-sizing: border-box;
			 box-sizing: border-box; }
 #app {
 	@include box-sizing; }
 #design {
	 @include box-sizing; }
~~~

reset mixin 만들기.

~~~sass
@mixin reset-list {
  margin: {
    top: 0;
    bottom: 0;
  }
  padding-left: 0;
  list-style: none;
}

@mixin reset-table {
  border-collapse: collapse;
  border-spacing: 0;
}

@mixin reset-box-model {
  outline: 0;
  margin: 0;
  border: 0;
  padding: 0;
}

@mixin remove-img-bottom-space {
  vertical-align: top;
}
~~~

~~~sass
 . @mixin nested-reset {
 #{$html-elements} {
     @include reset-box-model;
     @include reset-font;
 } 

$html-elements: "div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b, u,
i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output,
ruby, section, summary, time, mark, audio,
video" !default;
~~~


###1.5.1 전달 인자 (Arguments) 
@mixin으로 정의된 모듈에 인자를 전달하여 믹스인을 확장할 수 있다.

($변수) 믹스인 내부에 전달된 값을 받기에 전달 인자라고 부른다.
~~~sass
@mixin border-radius($변수) {
    -webkit-border-radius: $변수;
    -moz-border-radius: $변수;
    border-radius: $변수;
}

@mixin box-sizing($origin) {
  -webkit-box-sizing: $origin;
  -moz-box-sizing: $origin;
  -o-box-sizing: $origin;
  -ms-box-sizing: $origin;
  box-sizing: $origin;
}

@mixin transition($props: all 0.3s) {
  -webkit-transition: $props;
  -moz-transition: $props;
  -o-transition: $props;
  transition: $props;
}
~~~

---
###1.6 가운데 정렬 박스 모듈
~~~sass
.center-box {
  @include box-sizing(content-box)
  position: absolute
  top: 0
  left: 0
  width: $box-width
  height: $box-height
  margin:
    left: $box-width / -2
    top: $box-height / -2
}
~~~
