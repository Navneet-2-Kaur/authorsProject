import AuthorForm from "../components/AuthorForm";


const Create = (props) => {
  
    return (
      <div>
        <div>
          <hr/>
          <h1>Favorite authors</h1>
            <p>Add an new author:</p>
          <AuthorForm />
          <hr/>
        </div>
      </div>
    );
  };

export default Create;

