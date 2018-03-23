import * as React from "react";
import * as Autosuggest from "react-autosuggest";
import { WrappedFieldProps } from "redux-form";

const languages = [
  {
    title: "1970s",
    languages: [
      {
        name: "C",
        year: 1972,
      },
    ],
  },
  {
    title: "1980s",
    languages: [
      {
        name: "C++",
        year: 1983,
      },
      {
        name: "Perl",
        year: 1987,
      },
    ],
  },
  {
    title: "1990s",
    languages: [
      {
        name: "Haskell",
        year: 1990,
      },
      {
        name: "Python",
        year: 1991,
      },
      {
        name: "Java",
        year: 1995,
      },
      {
        name: "Javascript",
        year: 1995,
      },
      {
        name: "PHP",
        year: 1995,
      },
      {
        name: "Ruby",
        year: 1995,
      },
    ],
  },
  {
    title: "2000s",
    languages: [
      {
        name: "C#",
        year: 2000,
      },
      {
        name: "Scala",
        year: 2003,
      },
      {
        name: "Clojure",
        year: 2007,
      },
      {
        name: "Go",
        year: 2009,
      },
    ],
  },
  {
    title: "2010s",
    languages: [
      {
        name: "Elm",
        year: 2012,
      },
    ],
  },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value, shippingLocations) {
  const escapedValue = escapeRegexCharacters(value.trim());

  // if (escapedValue === '') {
  //   return [];
  // }

  const regex = new RegExp("^" + escapedValue, "i");

  return shippingLocations
    .map(section => {
      return {
        title: section.title,
        locations: section.locations.filter(location =>
          regex.test(location.name)
        ),
      };
    })
    .filter(section => section.locations.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>
      {suggestion.name} {suggestion.serviceHours}
    </span>
  );
}

function renderSectionTitle(section) {
  return <strong>{section.title}</strong>;
}

function getSectionSuggestions(section) {
  return section.locations;
}

function shouldRenderSuggestions() {
  return true;
}

interface Props extends WrappedFieldProps {
  optionsD?: any;
  classNameD: any;
}

export default class DropdownMenu extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value:
        this.props.input && !!this.props.input.value.name
          ? this.props.input.value.value
          : "", // Fix needed for SSR. Redux Forms will not pass correct props from input object.
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    console.log(
      suggestion,
      suggestionValue,
      suggestionIndex,
      sectionIndex,
      method
    );

    this.setState({
      name: suggestion.name,
    });

    this.props.input.onChange({
      ...suggestion,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.options),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions, name } = this.state;
    const inputProps = {
      placeholder: "Pick or search...",
      value,
      onChange: this.onChange,
    };

    return (
      <div>
        <div>{name}</div>
        <Autosuggest
          multiSection={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          inputProps={inputProps}
          shouldRenderSuggestions={shouldRenderSuggestions}
          onSuggestionSelected={this.onSuggestionSelected}
        />
      </div>
    );
  }
}
