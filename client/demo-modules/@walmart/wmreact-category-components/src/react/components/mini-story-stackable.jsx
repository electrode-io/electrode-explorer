import React, { PropTypes, Component } from "react";
import MinistoryTile from "./mini-story-tile";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

/*eslint-disable max-len */
/**
Ministory Banner Spotlights module
@examples
```jsx
<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    }
  ]}
/>

<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        }
      ]
    }
  ]}
/>
```
@component MinistoryStackable
@import {MinistoryStackable}
@playground
```

<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    }
  ]}
/>

<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        }
      ]
    }
  ]}
/>
```
*/
/*eslint-enable max-len */

export default class MinistoryStackable extends Component {
  _getSpots() {
    const { rows, isMobile } = this.props;
    const lastRowIndex = rows.length - 1;

    return rows.map((row, rowIndex) => {
      const isLastRow = (rowIndex === lastRowIndex);
      const lastSpotIndex = row.spots.length - 1;

      return row.spots.map((spot, spotIndex) => {
        const isLastSpot = spotIndex === lastSpotIndex;
        const isSpotHiddenEligible = isLastRow && isLastSpot && (rowIndex % 2 === 0);
        return (
          <MinistoryTile
            {...spot}
            isMobile={isMobile}
            isHidden={isSpotHiddenEligible}
          />
        );
      });
    });
  }

  render() {
    return (
      <div className="ResponsiveContainer ministory-stackable"
        {...getTempoModuleAutomationId(this.props.moduleType, process)}>
        <div className="Grid mini-story-gutters Grid--gutters">
          {this._getSpots()}
        </div>
      </div>
    );
  }
}

MinistoryStackable.propTypes = {
  /**
  To add proper torbit params (width and height)
  */
  isMobile: PropTypes.bool,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  spotlight Configuration rows
  */
  rows: PropTypes.array.isRequired
};

MinistoryStackable.defaultProps = {
  isMobile: true,
  moduleType: ModuleTypes.MINI_STORY
};
