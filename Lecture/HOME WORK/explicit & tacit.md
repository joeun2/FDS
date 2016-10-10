#암시적 표현 & 명시적 표현

####암시적 표현
- label 요소 내에 input요소를 준다
즉 label 요소 내에 있는 컨트롤은 굳이 밝히지 않아도 관련이 있다고 본다.

```
<label>
      <input type="radio" name="select" value="암시적">
      암시적 표현
</label>
```

####명시적 표현
- for 속성을 이용하여 input요소에 id 값을 지정하여 연결시킨다.

```
<input type="radio" name="select" id="explicit" value="명시적">
<label for="explicit">명시적 표현</label>
```
