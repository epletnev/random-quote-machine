const myQuotes = [
{ 'quote': 'Do you fall in love with boys or with girls?\" I asked her. \"Sometimes boys,\" she replied. \"Mostly souls.', 'author': '― Juansen Dizon' },
{ 'quote': 'Only by speaking out can we create lasting change. And that change begins with coming out.', 'author': '― DaShanne Stokes' },
{ 'quote': 'To all the young people who discover they are gay: Don\'t be afraid to come out of the closet right now.', 'author': '― Núria Añó' },
{ 'quote': 'I\’ll be okay even if i don\’t understand how i don\’t want to be a girl, but also don\’t want to be a man.', 'author': '― Courtney Carola' },
{ 'quote': 'Standing against discrimination for some while supporting discrimination against others hurts us all.', 'author': '― DaShanne Stokes' },
{ 'quote': 'One day, progress being what it was, I hoped no one would have to have a big gay coming-out or a bisexual coming-out. It would just be what it was, and that would be that. But we weren\'t quite there yet.', 'author': '― S.E. Harmon' },
{ 'quote': 'Living in a world that is grossly opposed to who you are, the bravest and most radical thing to do is to be yourself. And being a part of the LGBT+ community is just that – brave.', 'author': '― Courtney Carola' },
{ 'quote': 'How heavenly it would be to live their lives free from the thought that they were being criticized, pointed out - their love for each other discussed as though it were some low vulgar thing.', 'author': '― Lilyan Brock' },
{ 'quote': 'Saying it\'s hard being straight is like complaining to the poor that it\'s difficult being wealthy.', 'author': '― DaShanne Stokes' },
{ 'quote': 'Pride is not an LGBT celebration, it\'s a human rights celebration - it\'s a celebration of equality - it\'s a celebration of inclusion - it\'s a celebration of acceptance.', 'author': '― Abhijit Naskar' }];


const colors = ['#885819', '#7a001e', '#3d000f', '#cc0033', '#32694e', '#102387', '#5a5557', '#7e9abf', "#216583", "#baa34d", "#65c0ba"];

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: myQuotes[0]['quote'],
      author: myQuotes[0]['author'],
      color: colors[0] };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const quoteIndex = Math.floor(Math.random() * myQuotes.length);
    const randomQuote = myQuotes[quoteIndex];
    const quoteColor = Math.floor(Math.random() * colors.length);
    this.setState({
      quote: randomQuote['quote'],
      author: randomQuote['author'],
      color: colors[quoteColor] });

  }

  render() {
    return (
      React.createElement("div", { id: "quote-box", style: { backgroundColor: this.state.color } },
      React.createElement("h1", { id: "title" }, "LGBTQ Rights Quotes"),
      React.createElement("p", { id: "text" }, "\"", this.state.quote, "\""),
      React.createElement("p", { id: "author" }, this.state.author),
      React.createElement("div", { className: "button" },
      React.createElement("a", { href: `https://twitter.com/intent/tweet?text= ${this.state.quote} ${this.state.author}`, target: "_blank", title: "Post this quote on twitter!", id: "tweet-quote" },
      React.createElement("i", { className: "fab fa-twitter twitter-icon" })),

      React.createElement("button", { onClick: this.handleClick, id: "new-quote" }, "New Quote"))));



  }}
;

ReactDOM.render(React.createElement(Quotes, null), document.getElementById('root'));