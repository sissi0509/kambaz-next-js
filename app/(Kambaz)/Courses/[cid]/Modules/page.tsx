export default function Modules() {
    return (
        <div>
            {/* Implement Collapse All button, View Progress button, etc. */}
            <ul>
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Developing Full Stack - Chapter 1</li>
                                <li className="wd-content-item">Developing Full Stack - Chapter 2</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development </li>
                                <li className="wd-content-item">Installing Node.js</li>
                                <li className="wd-content-item">Creating a Next.js React Application </li>
                            </ul>
                        </li>
                    </ul>

                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Keep working on assignment 1</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Developing Full Stack - Chapter 3</li>
                                <li className="wd-content-item">Developing Full Stack - Chapter 4</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Implementing the Kambaz Account Screens </li>
                                <li className="wd-content-item">Implementing the Kambaz Dashboard Screen </li>
                                <li className="wd-content-item">Implementing the Kambaz Courses Screen </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    );
}
