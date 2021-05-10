import styled from "styled-components";
import { useState } from "react";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const reset = (e) => {
    setEditorText("");
    props.handleClick(e);
  };
  return (
    <>
      {props.showModal == "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/close-icon.svg" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/user.svg" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssests>
                <AssestButton>
                  <img src="image-icon.svg" />
                </AssestButton>
                <AssestButton>
                  <img src="video-icon.svg" />
                </AssestButton>
              </AttachAssests>
              <ShareComment>
                <AssestButton>
                  <img src="/comment-icon.svg" />
                  Anyone
                </AssestButton>
              </ShareComment>
              <PostButton>
                <span>Post</span>
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 0px;
    margin: 0px;
    height: 30px;
    width: 30px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    svg,
    img {
      pointer-events: none;
      border: none;
      width: 15px;
      height: 15px;
      align-items: center;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssestButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  min-width: auto;
  /* background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.5); */

  img {
    width: 18px;
    height: 18px;
  }
`;

const AttachAssests = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssestButton} {
    width: 30px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssestButton} {
    svg {
      margin-right: 5px;
    }
    img {
      width: 15px;
      height: 15px;
      margin-right: 2px;
      padding: 0px 3px;
    }
  }
`;

const PostButton = styled.div`
  /* min-width: 60px; */
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: #0a66c2;
  color: white;

  &:hover {
    background: #004182;
  }

  span {
    display: flex;
    margin-top: 3px;
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export default PostModal;
