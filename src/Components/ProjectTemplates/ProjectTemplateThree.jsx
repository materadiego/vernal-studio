import useObserver from "../useObserver/useObserver";

export default function ProjectTemplateThree({ project }) {
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
  const [elementRef9, isIntersecting9] = useObserver({
    threshold: 0.25,
  });
  const [elementRef10, isIntersecting10] = useObserver({
    threshold: 0.25,
  });
  const [elementRef11, isIntersecting11] = useObserver({
    threshold: 0.25,
  });
  const [elementRef12, isIntersecting12] = useObserver({
    threshold: 0.25,
  });
  const [elementRef13, isIntersecting13] = useObserver({
    threshold: 0.25,
  });
  const [elementRef14, isIntersecting14] = useObserver({
    threshold: 0.25,
  });
  const [elementRef15, isIntersecting15] = useObserver({
    threshold: 0.25,
  });

  return (
    <div className="ProjectTemplateThree">
      <img
        ref={elementRef1}
        src={project.image1}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting1 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef2}
        src={project.image2}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting2 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef3}
        src={project.image3}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting3 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef4}
        src={project.image4}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting4 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef5}
        src={project.image5}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting5 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef6}
        src={project.image6}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting6 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef7}
        src={project.image7}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting7 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef8}
        src={project.image8}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting8 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef9}
        src={project.image9}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting9 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef10}
        src={project.image10}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting10 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef11}
        src={project.image11}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting11 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef12}
        src={project.image12}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting12 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef13}
        src={project.image13}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting13 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef14}
        src={project.image14}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting14 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
      <img
        ref={elementRef15}
        src={project.image15}
        alt="project"
        className={`ProjectTemplateThree__Image ${
          isIntersecting15 ? "Intersecting" : "NotIntersecting"
        }`}
      ></img>
    </div>
  );
}
