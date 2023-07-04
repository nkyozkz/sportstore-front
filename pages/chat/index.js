import ChatComponent from "@/components/chatComponent/ChatComponent";
import GeneralLayout from "@/components/common/Layout/GeneralLayout";
import Authorized from "@/components/common/authorized/authorized";

const chat = () => {
  return (
    <GeneralLayout>
      <Authorized>
        <ChatComponent />
      </Authorized>
    </GeneralLayout>
  );
};

export default chat;
