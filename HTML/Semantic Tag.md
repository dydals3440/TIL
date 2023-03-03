### 1. 의미 있는 태그(Semantic Tag)란?

의미 있는 태그, 즉 시멘틱 태그란 '의미있는', '의미론적인' HTML 태그를 말한다.
의미없는 태그인 div와 span 대신 nav, header, section 태그 등을 사용한다. 이는 콘텐츠의 계층 구조를 쉽게 파악할 수 있게한다.

### 2. Semantic Tag 장점?

1. 검색 엔진이 시멘틱 마크업을 페이지 검색 랭킹에 영향을 줄 수 있는 중요한 키워드로 생각한다.
2. 검색 엔진 최적화(SEO)에 도움이 된다.
3. 시각 장애인이 화면 리더기로 페이지를 탐색할 때 시멘틱 태그가 도움을 준다.
4. 화면 리더기가 특정 시멘틱 태그를 만나면 특정 효과를 발생시킨다.
5. 의미없는 태그(div, span)를 탐색하는 것보다, 시멘틱 태그를 탐색하는 것이 훨씬 쉽다.
6. 시멘틱 태그안의 데이터를 예측할 수 있다.

### 3. Semantic Tag 종류 및 특징

3-1. strong
아래는 똑같은 결과를 보여준다.
코드의 결과만 보고는 구분이 안된다.

```
<p style="font-weight: bold">볼드체</p>
<p><strong>p태그안의 strong태그 입니다.</strong></p>
```

_**실행결과!**_

<p style="font-weight: bold">볼드체</p>
<p><strong>p태그안의 strong태그 입니다.</strong></p>

p태그의 font-weight는 검색엔진이 해석을 안하려고한다.
이 태그를 일반 글씨로 인식하게 된다.
반면, 검색엔진이 strong 태그를 만나면 '아 여기는 굵게 표시했구나!' 라고 인식한다.
strong은 '강인한' 이라는 뜻이다. 똑같은 볼드체 이지만 '강조'하는 태그이다.
검색엔진이 페이지를 분석하다가 **strong 태그를 만나면 페이지 안에서 중요한 문장이라고 인식**한다.

또, **스크린리더가 strong 태그를 만나면 조금 더 강하게 말해준다.**
예를 들어, p태그의 font-weight안의 text는 일반적인 톤으로 "볼드체"를 읽는데,
strong 태그 안의 text는 강조된 톤으로 "p태그안의↗ strong태그↗ 입니다↗"로 읽는다.
그러면 시각장애인이 음성만 듣고도 페이지에서 중요한 부분이 어디에 있는지 인식할 수 있게된다.

---

_**3-2. em**_

```html
<h1><i>h1 태그안 이텔릭체 입니다.</i></h1>
<p><em>p태그안 강조하는 이텔릭체 입니다.</em></p>
```

<h1><i>h1 태그안 이텔릭체 입니다.</i></h1>
<p><em>p태그안 강조하는 이텔릭체 입니다.</em></p>

실행결과
h1 태그안 이텔릭체 입니다.

p태그안 강조하는 이텔릭체 입니다.

em은 강조하는 이텔릭체이다.em은 영어로 emphasize의 줄임말이다.
검색엔진이 em 태그를 만나면 강조하는 부분이라는걸 인식한다.
또, **스크린 리더가 **em**태그 부분을 "더 강하게" 읽는다.**

---

**3-3. mark**

```html
<p>집에 오는 길에 <mark>우유</mark>사는 걸 잊지말자.</p>
<p>
  집에 오는 길에
  <span style="background-color: yellow; color:black;">우유</span>사는 걸
  잊지말자.
</p>
```

<p>집에 오는 길에 <mark>우유</mark>사는 걸 잊지말자.</p>
<p>집에 오는 길에 <span style="background-color: yellow; color:black;">우유</span>사는 걸 잊지말자.</p>

실행결과
집에 오는 길에 우유사는 걸 잊지말자.

집에 오는 길에 우유사는 걸 잊지말자.

---

**3-4. del**

```html
<p>제품 할인 중 <del>3만원</del>2만8천원</p>
<p>
  제품 할인 중 <span style="text-decoration: line-through;">3만원</span>2만8천원
</p>
```

<p>제품 할인 중 <del>3만원</del>2만8천원</p>
<p>제품 할인 중 <span style="text-decoration: line-through;">3만원</span>2만8천원</p>

실행결과
제품 할인 중 3만원2만8천원

제품 할인 중 3만원2만8천원

---

**3-5. ins**

```html
<p>내가 제일 좋아하는 색상은 <ins>노란색</ins>입니다.</p>
<p>
  내가 제일 좋아하는 색상은
  <span style="text-decoration: underline;">노란색</span>입니다.
</p>
```

<p>내가 제일 좋아하는 색상은 <ins>노란색</ins>입니다.</p>
<p>내가 제일 좋아하는 색상은 <span style="text-decoration: underline;">노란색</span>입니다.</p>

실행결과
내가 제일 좋아하는 색상은 노란색입니다.

내가 제일 좋아하는 색상은 노란색입니다.

---

3-6. 인용관련 태그 (blockquote, q, abbr, address, cite)

```html
<figure>
  <blockquote cite="여기는 출처 넣는 곳">
    <p>
      Your time is limited, so don't waste it living someone else's life. Don't
      be trapped by dogma – which is living with the results of other people's
      thinking
    </p>
  </blockquote>
  <figcaption>—Steve Jobs, <cite>CEO of Apple</cite></figcaption>
</figure>
```

<figure>
    <blockquote cite="여기는 출처 넣는 곳">
        <p>Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking</p>
    </blockquote>
    <figcaption>—Steve Jobs, <cite>CEO of Apple</cite></figcaption>
</figure>

실행결과
Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking

—Steve Jobs, CEO of Apple

---

<!-- 설명들어간 약자 넣기  -->

<abbr title="World Health Organization">WHO</abbr>

---

<!-- 주소기입 -->
<address>대한민국 제주특별자치도 제주시 **동 **길</address>

---

<!-- 제품, 상품 등등의 명칭을 쓸 때 cite를 씀 -->
<p><cite>절규</cite>는 뭉크가 1893년에 그린 그림입니다.</p>
<p><cite>개발자의 품격</cite>은 유튜브 채널 입니다.</p>

---

실행결과

WHO 대한민국 제주특별자치도 제주시 **동 **길
절규는 뭉크가 1893년에 그린 그림입니다.

# 왜 의미가 있는 태그를 사용해야 할까?

습관적으로 필요한 태그를 안쓰고 그냥 **css로만 시각적인 효과만을 주는 것은 굉장히 바람직하지 않다**. strong 태그가 주는 혜택을 쓰지 않으면, **검색 엔진의 도움을 최대한 받지 못한다.**
스크린 리더가 강조해야할 태그를 지나쳐 버리게 된다.
시멘틱 태그를 쓰면 태그만 보고도 어떤 의도로 작성했는지 빨리 인식할 수 있다.
개발자가 시멘틱 태그를 의식적으로 써야한다면 물론 힘들다. 귀찮을 지도 모른다.
하지만, **편안한 사용자경험을 생각해 봤을 때는 개발자는 꼼꼼하게 시멘틱 태그를 써야한다.**
개발자가 불편해야 사용자가 편해진다.
📌결론적으로, 의미있는 요소(시멘틱 태그)를 적재적소에 쓰도록 해야한다.
