###### Front-End Develop SCHOOL

# DAY 05

## Javascript

### 변수 선언 방법

#### 1. 변수 선언
```js
var my_name; // 변수 선언 시, 기본적으로 undefined 값 할당
```

#### 2. 선언된 변수에 값 할당
```js
var current_state;
// 선언된 변수에 값을 할당
current_state = 200;
```

#### 3. 선언과 동시에 값 할당
```js
var current_state = 200;   // 숫자
var is_finished   = false; // 불리언
var container_el  = null;  // 비어 있다.
var my_name;               // 변수 선언만 하게 되면 undefined
```

#### 4. `var` 키워드를 한 번만 사용하는 싱글톤(Singleton) 패턴
```js
var current_state = 200,   // 숫자
    is_finished   = false, // 불리언
    container_el  = null;  // 비어 있다.
```



##데이터 값 '복사'와 '참조'

변수(Variable)에 값이 할당 :  값의 유형(Data Type)에 따라 **복사** 또는 **참조(Reference)**된다.

```js
복사의 예)
var first = 'data';
var second;
second = first;
second === first;  //true ( '==='은  등호. Strict Equal `완벽 일치 비교`)
```

단, 여기서 `first`와 `second`의 데이터는 같으나 메모리 저장소는 다름.<br>
따라서 한 변수에만 다른 값을 할당하면 둘은 다른 값을 가지게 된다.

```js
first = 'another data';
second === first; //false
```



## 초기화
var parent = null;
var child_one = null;
var child_two = null;

## 문서 객체 제어

1.HTML 문서에서 'my-parent'라는 `id` 이름이 'my-parent'와 일치하는 문서 객체를 변수 `my_parent`에 할당한다.<br>
※ 자바스크립트에서는 변수명에 **`-`**을 사용 할 수 없다. **`_`**를 사용하는 것에 주의.

```js
사용법 : document.getElementById('아이디명')

var my_parent = document.getElementById('my-parent');
var child_1 = document.getElementById('child_one');
var child_2 = document.getElementById('child_two');
```
2.console.log를 사용할 때 문자열을 넣어주면 해당 문자열을 출력하고, 변수명을 넣어주면 변수명에 들어가 있는 데이터를 출력한다.
위에서 my_parent 변수에는 my-parent ID로 되어 있는 태그가 들어있기 때문에 해당 태그가 아래와 같이 출력된다.
ex>
my_parent : `<div id="my-parent" style="border: 1px solid rgb(126, 93, 196);">
            <div id="child-one" style="color: rgb(126, 93, 196);">one</div>
            <div id="child-two" style="background: rgb(126, 93, 196); color: rgb(255, 255, 255);">two</div>
            </div>`
```js
사용법 : console.log('문자열',변수명);
console.log('my_parent :', my_parent);
console.log('child_one :', child_1);
console.log('child_two :', child_2);
```

변수에 할당된 값(문서 객체)을 사용해서 자바스크립트에서 __인라인 스타일 제어__할 수 있다.

```js
my_parent.style.border   = '1px solid #7e5dc4';

child_1.style.color      = '#7e5dc4';
child_2.style.background = '#7e5dc4';
child_2.style.color      = '#fff';

```

---


## CSS3

### 가상 클래스와 가상 요소 (Pseudo Class VS Pseudo Element)

CSS2 에서는 가상 클래스나 가상 요소 모두 앞에 `:` 썼으나, CSS3 부터는 가상 요소 앞에는 `::`

##### 가상 클래스 : `상태(Status)`와 관련된 것

```css
:link     {}
:visited  {}
:hover    {}
:focus    {}
:active   {}
:lang(en) {}
```

##### 가상 요소 : 가상으로 `요소`를 추가

```css
::before       {}
::after        {}
::first-line   {}
::first-letter {}
::selection    {}
```



###  width, height 중 하나의 값에 다른 하나를 자동으로 비율 적용하는 방법

```css
img {
  width: auto;
  height: 100vh;
  vertical-align: top; /* 이미지 아래에 존재하는 알 수 없는 공간 제거 */
}
```

또는

```css
img {
  width: 50vw;
  height: auto;
}
```

※ `vertical-align`은 이미지를 화면에 꽉차게 할 때, __이미지 아래에 존재하는 알 수 없는 공간을 없애고 싶을 때 사용__.



### Transform

```css
* {
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: 0 0;
}
```

- `transform-origin`은 회전하는 기준점. 설정하지 않으면 기본값은 요소의 중심이다. `(50% 50%)`
- `rotate`는 회전, `()`는 각도(-는 반시계 방향, 양수는 시계방향으로 돈다)
- `translateX`는 X축(좌우 이동), `translateY`는 Y축(상하 이동)
- 단, 여기서는 90도 회전하였으므로 `translateX(-100%)`은 좌우가 아니라 아래로 이동하게 된다.
- 회전한 요소의 `width`, `height`도 원래 요소 모양으로 적용되므로 회전후 화면에 보이는 폭과 너비로 생각하면 안된다.



### Dropcap 디자인

![](http://www.magazinedesigning.com/wp-content/uploads/2013/06/drop-caps-initials-4.jpg)

```css
p::first-letter {
  float: left;
  margin: ...;
  font-size: ...;
  font-weight: ...;
  line-height: ...;
}
```

### 브라우저 스타일 초기화 모듈

```css
body {
  margin: 0;
  font: 1rem/1.5 "Spoqa Han Sans", Sans-Serif;
}
```

- `font: (font-weight) (font-style) (font-variant) [font-size]/[line-height] [font-family];`
- `()`는 생략가능. `sans-serif`는 적용한 폰트가 지원되지 않는 환경일 경우 `sans-serif` 계열(삐침이 없는 글씨체)로 대체.
- 그 밖에 `padding`이나 기본세팅 원하는 속성 추가

-

### clearfix 모듈

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

※ `float` 속성 적용이 많을 때 필요할 경우, HTML 요소에 `clearfix` 클래스 속성을 추가해서 제어할 수 있다.

---

## Photoshop

### 투명 배경 만들기

1. Rectangular Marquee Tool로 원하는 부분 선택 (shift를 누르고 드래그하면 중복 선택가능)<br>
![Rectangula Marquee Tool](http://pe-images.s3.amazonaws.com/basics/cc/new-features/2015/customize-toolbar/rectangular-marquee-tool-group.gif)
2. 복사 - 새창에서 붙여넣기 (복사 후 file-new 하면 clipboard의 이미지가 그대로 붙여넣기 됨)
3. Magic Wand Tool로 버릴 배경 선택.<br>
![magic wand tool](http://pe-images.s3.amazonaws.com/basics/clipping-masks/essentials/magic-wand-tool.gif)
4. 배경 Delete
5. Image - Trim 하면 가장자리 부분이 이미지에 맞게 잘린다.
6. 저장
