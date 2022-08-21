import React from "react";
import "./WelcomePage.css";

export const WelcomePage = ({ bookId, randomBookList, pageId, goToNextPage, refreshBooklist }) => {
    const [bookLink, setBookLink] = useState("");
    const [randomBookList, setRandomBookList] = useState([]);
    
    useEffect(() => {
      getBook(bookId).then((response) => {
        setBookLink(response.formats["text/html"]);
      });
    }, [bookId]);
      useEffect(() => {
        // goToNextPage(pageId)
        // refreshBooklist(pageId)
        renderBook();
        setBookList(bookListProp);
      }, [bookListProp]);

  return (
    <section className="welcome-page-container">
      <h2>WELCOME</h2>
    </section>
  );
};
