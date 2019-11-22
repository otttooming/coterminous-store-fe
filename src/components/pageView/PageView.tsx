import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import * as frontMatter from 'front-matter';
import { LocationChangeProps } from '../../common/products/typings';
import { PageProps } from '../../services/pageApi/pageApi';

interface Props {
  onLocationChange?: (props: LocationChangeProps) => void;
  page: PageProps;
}

interface PageFrontMatter {
  title: string;
}

class PageView extends React.Component<Props, any> {
  render() {
    const { page } = this.props;

    return (
      <div className="content__common bg__common bg__common--light p1">
        <ReactMarkdown source={this.props.page.body} />
      </div>
    );
  }
}

export default PageView;
