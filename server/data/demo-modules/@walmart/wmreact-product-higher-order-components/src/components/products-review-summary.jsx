import React, {PropTypes} from "react";
import Stars from
  "@walmart/wmreact-product-descriptors/lib/components/stars";
import TextTruncate from
  "@walmart/wmreact-product-typography/lib/components/text-truncate";
import Revealer from
  "@walmart/wmreact-interactive/lib/components/revealer";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import clientWidth from
  "@walmart/wmreact-layout/lib/components/helpers/client-width";

/**
 Basic component for a single Review component
 Ex: A user leaves a review on the product page and
 the content in that single review will be rendered.
 @examples
 ```jsx
 <div>
 <ReviewSummary/>
 </div>
 */

export const BADGE_VALUES = {
  "top1Contributor": "trophy",
  "top10Contributor": "star",
  "top25Contributor": "star",
  "top50Contributor": "star",
  "top100Contributor": "star",
  "top500Contributor": "star",
  "top1000Contributor": "star",
  "VerifiedPurchaser": "ok",
  "SRIncentivizedReviewYes": "comment",
  "kidschoice2013": "comment",
  "kidschoice2014": "comment",
  "kidschoice2015": "comment",
  "kidschoice2016": "comment",
  "Walmart associate": "user",
  "Affiliation id: staff": "user",
  "BackedbyMom": "spark"
};

export const BADGE_HTML = {
  "top1Contributor": "#1 contributer",
  "top10Contributor": "Top 10 contributer",
  "top25Contributor": "Top 25 contributer",
  "top50Contributor": "Top 50 contributer",
  "top100Contributor": "Top 100 contributer",
  "top500Contributor": "Top 500 contributer",
  "top1000Contributor": "Top 1000 contributer",
  "VerifiedPurchaser": "Verified purchaser",
  "SRIncentivizedReviewYes":
    "Spark reviewer - <span class=\"review-badge-light\">received free product</span>",
  "kidschoice2013":
    "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "kidschoice2014":
    "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "kidschoice2015":
    "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "kidschoice2016":
    "Kids voted - <span class=\"review-badge-light\">here are their top picks</span>",
  "Walmart associate": "Walmart associate",
  "Affiliation id: staff": "Staff sparks",
  "BackedbyMom": "Walmart Moms"
};

const ReviewSummary = (props) => {
  const {
    reviewTitle,
    reviewText,
    reviewUrl,
    rating,
    reviewSubmissionTime,
    userNickname,
    badgeList
  } = props;

  const _getBadgesList = () => {
    return (
      <div>
        {
          badgeList.map((badge) => {
            if (BADGE_HTML[badge] && BADGE_VALUES[badge]) {
              return (
                <div className="review-badge display-inline-block">
                  <Icon name={BADGE_VALUES[badge]} size={1}/> &nbsp;
                  <span dangerouslySetInnerHTML={{__html: BADGE_HTML[badge]}}></span>
                </div>
              );
            } else {
              return (
                <div className="review-badge display-inline-block">
                  <Icon name="user" size={1}/>
                  <span dangerouslySetInnerHTML={{__html: BADGE_HTML[badge]}}></span>
                </div>
              );
            }
          })
        }
      </div>
    );
  };

  const _renderReview = () => {
    return (
      <div className="review-body margin-top">
        <div className="review-showBottomBorder"></div>
        <div className="review-description margin-top">
          <Revealer
            buttonOpenText="Read less"
            buttonClosedText="Read more">
            {reviewText}
          </Revealer>
        </div>
      </div>
    );
  };

  const _renderReviewPage = () => {
    return (
      <div className="review-body margin-top">
        <div className="review-showBottomBorder"></div>
        <div className="arrange arrange-spaced arrange-middle">
          <div className="review-description arrange-fill margin-top">
            <TextTruncate text={reviewText} line={3}/>
          </div>
            <div className="arrange-fit">
              <a href={reviewUrl}>
                <i className="paginator-hairline-btn paginator-hairline-btn-next trigger-arrow"></i>
              </a>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="review">
      <div className="review-header margin-top">
        <div className="Grid">
          <div className="Grid-col u-size-12-12-xs u-size-10-12-m">
            <div className="review-title">{reviewTitle}</div>
          </div>
          <div className="Grid-col u-size-2-12-m hide-content-xs display-inline-block-m">
            <div className="review-submissionTime text-right">{reviewSubmissionTime}</div>
          </div>
        </div>
        <div className="Grid review-star-rating margin-top">
          <div className="Grid-col u-size-2-4-xs u-size-3-12-m  align-left">
            <Stars total={5} average={rating}/>
          </div>
          <div className="Grid-col u-size-2-4-xs u-size-9-12-m hide-content-m">
            <div className="review-submissionTime text-right">{reviewSubmissionTime}</div>
          </div>
        </div>
        <div className="margin-top">
          <div className="Grid">
            <div className="Grid-col u-size-2-6-xs u-size-1-6-m review-username">
              {userNickname}
            </div>
            <div className="Grid-col u-size-4-6-xs u-size-5-6-m">
              {_getBadgesList()}
            </div>
          </div>
        </div>
      </div>
      {
        clientWidth.isBelowBreakPoint("medium") ?
          _renderReviewPage() : _renderReview()
      }
    </div>
  );
};

ReviewSummary.propTypes = {
  /**
   *  Prop Types
   */
  reviewId: PropTypes.number,
  reviewTitle: PropTypes.string,
  reviewText: PropTypes.string,
  reviewUrl: PropTypes.string,
  rating: PropTypes.number,
  reviewSubmissionTime: PropTypes.string,
  userNickname: PropTypes.string,
  badgeList: PropTypes.array
};

ReviewSummary.defaultProps = {};

export default ReviewSummary;
