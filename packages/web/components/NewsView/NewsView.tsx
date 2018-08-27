import * as React from 'react';
import styled from 'styled-components';
import { Typography } from 'javascript-af-ui';

const CardWithGrid = styled.div`
  display: grid;
  grid-template-columns: 75% 1fr;
  grid-template-rows: 70vh 1fr;
  grid-template-areas: 'picture picture' 'content side';
`;

interface CardMediaProps {
  img: string;
}

const CardMedia = styled.div`
  /* hi */
  display: grid;
  align-items: center;
  grid-area: picture;
  background: black;
  background-image: url("${(props: CardMediaProps) => props.img}");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  box-shadow: 4px 0 4px  rgba(0,0,0,0.1);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.80;
  }
  h1 {
    margin: 2vw;
    z-index: 1;
  }
`;

const Content = styled.div`
  grid-area: content;
  font-family: 'Fira Sans', sans-serif;
  font-size: 22px;
  line-height: 40px;
  padding: 0 4rem;
  p {
    font-family: 'Fira Sans', sans-serif;
    margin: 20px 0;
    color: rgba(0, 0, 0, 0.84);
  }
`;

const SideBar = styled.div`
  position: sticky;
  top: 1rem;
  grid-area: side;
`;

const SideSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  h4 {
    margin: 6px 0;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    text-transform: uppercase;
    width: max-content;
    border-bottom: 1px solid #6200ee;
  }
  padding: 1rem 0.5rem;
  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 75%;
    left: 7.5%;
    bottom: 0;
    border-bottom: 3px solid #6200ee;
    opacity: 0.5;
  }
  .button-container {
    padding: 0 3rem 0 0;
  }
`;

const TwitterIcon = props => (
  <svg
    fill="#ffffff"
    viewBox="328 355 335 276"
    width="400"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
    />
  </svg>
);

const RedditIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#ffffff"
    {...props}>
    <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" />
  </svg>
);

interface BProps {
  bg: string;
  size: string;
}

const BrandButton = styled.button`
  font-family: 'Fira Mono', sans-serif;
  font-size: 1.2rem;
  background: ${(props: BProps) => props.bg};
  font-weight: 600;
  color: #ffffff;
  border: none;
  margin: 0.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    height: ${(props: BProps) => props.size};
    width: ${(props: BProps) => props.size};
    margin-right: 2px;
  }
  .text {
    flex: 1;
  }
`;

export class NewsView extends React.Component {
  render() {
    return (
      <CardWithGrid>
        <CardMedia
          img={`https://techcrunch.com/wp-content/uploads/2018/08/twitterrific.jpg?w=1390&crop=1`}>
          <Typography type="h1" color="#fff">
            Twitter is killing third party apps
          </Typography>
        </CardMedia>
        <Content>
          <p>
            If you’re a certain age, it’s likely that you’ve never given a
            second thought to buying a municipal bond or the process of bond
            buying, even if you’ve intuited, rightly, that’s it’s an
            intentionally opaque business.
          </p>
          <p>
            Yet there could be a big opportunity for startups, and for people
            looking for places to invest, and for cities with crumbling
            infrastructures, in disrupting the status quo — if only more
            Americans start playing attention.
          </p>
          <p>
            First, there’s a strong case for buying bonds. Late last year, the
            Trump administration capped at $10,000 the amount that taxpayers can
            deduct in property tax and local and state income tax. Most people
            with hefty tax bills are benefiting in other ways from that same new
            tax bill, but this aspect of it isn’t so great for them, and
            municipal bonds can help. The reason: interest income paid on muni
            bonds is exempt from federal tax. (Bonds issued within one’s state
            can also be free of state tax.)
          </p>
          <p>
            What about people without hefty tax bills? For one thing, bonds are
            a very safe investment. They’re not sexy, it’s true ( they typically
            deliver interest in the single digits), but they also feature low
            default rates. Whether debts from states, cities, or counties,
            they’re typically government guaranteed and paid back in full at the
            end of their term. In fact, muni bond default rates have been as low
            as below .03 percent over the last decade. What’s also compelling —
            perhaps even more so — is that bonds can give residents an
            opportunity to help out the community where they live. For example,
            Oakland, Ca. voters in 2016 overwhelmingly approved a $600 million
            bond to fix old city streets and build affordable housing.
          </p>
        </Content>
        <SideBar>
          <SideSection>
            <Typography type="h4" margin={6}>
              Share
            </Typography>
            <div className="button-container">
              <BrandButton size="28px" bg="#00aced">
                <TwitterIcon /> <span className="text">Tweet it!</span>
              </BrandButton>
              <BrandButton size="32px" bg="#FF5700">
                <RedditIcon /> <span className="text">Reddit!</span>
              </BrandButton>
            </div>
          </SideSection>
        </SideBar>
      </CardWithGrid>
    );
  }
}
