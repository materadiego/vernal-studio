import useObserver from "../useObserver/useObserver";

export default function ProjectTemplateOne({ project }) {
  // Itersections
  const [elementRef1, isIntersecting1] = useObserver({
    threshold: 0.25,
  });
  const [elementRef2, isIntersecting2] = useObserver({
    threshold: 0.25,
  });
  const [elementRef3, isIntersecting3] = useObserver({
    threshold: 0.25,
  });
  const [elementRef4, isIntersecting4] = useObserver({
    threshold: 0.25,
  });
  const [elementRef5, isIntersecting5] = useObserver({
    threshold: 0.25,
  });
  const [elementRef6, isIntersecting6] = useObserver({
    threshold: 0.25,
  });
  const [elementRef7, isIntersecting7] = useObserver({
    threshold: 0.25,
  });
  const [elementRef8, isIntersecting8] = useObserver({
    threshold: 0.25,
  });
  return (
    <div className="ProjectTemplateOne">
      <img
        ref={elementRef1}
        src={project.image1}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting1 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef2}
        src={project.image2}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting2 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef3}
        src={project.image3}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting3 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef4}
        src={project.image4}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting4 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef5}
        src={project.image5}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting5 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef6}
        src={project.image6}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting6 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef7}
        src={project.image7}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting7 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef8}
        src={project.image8}
        alt="project"
        className={`ProjectTemplateOne__Image ${
          isIntersecting8 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
    </div>
  );
}
