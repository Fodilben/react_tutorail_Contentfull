import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "lkhadip215jb",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

const useContentfullHook = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const fetch = async () => {
    try {
      const response = await client.getEntries({ content_type: "title" });

      const AllProjects = response.items.map((item) => {
        const { title, image, url } = item.fields;
        const { id } = item.sys;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(AllProjects);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return { isLoading, projects };
};
export default useContentfullHook;
