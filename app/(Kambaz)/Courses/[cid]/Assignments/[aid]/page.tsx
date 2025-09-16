export default function AssignmentEditor() {
    return (
        <form id="wd-assignments-editor">
            <label htmlFor="wd-name">
                <h3>Assignment Name</h3>
            </label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
            <textarea
                id="wd-description"
                rows={10} cols={40}
                defaultValue="The assignment is available online Submit a link to the landing page of your
                website. Make sure to include all the pages you created in a zip file."
            />
            <br /><br />
            <table>
                <tbody>
                    <tr>
                        <td
                            align="right"
                            valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input
                                id="wd-points"
                                type="number"
                                defaultValue={100} />
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td
                            align="right"
                            valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group" defaultValue="ASSI">
                                <option value="ASSI">ASSIGNMENTS</option>
                                <option value="QUIZ">QUIZZES</option>
                                <option value="EXAM">EXAMS</option>
                                <option value="PROJ">PROJECT</option>
                            </select>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>

                    <tr>
                        <td
                            align="right"
                            valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as" defaultValue="PERC">
                                <option value="PERC">Percentage</option>
                                <option value="POINT">Points</option>
                                <option value="LET">Letter Grade</option>
                            </select>
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>

                    <tr>
                        <td
                            align="right"
                            valign="top">
                            <label htmlFor="wd-submission-type">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-submission-type" defaultValue="ONLINE">
                                <option value="ONLINE">Online</option>
                                <option value="PAPER">On Paper</option>
                            </select>
                        </td>
                    </tr>

                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td></td>
                        <td
                            align="left"
                            id="wd-submission-type">
                            Online Entry Options
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="left">
                            <input
                                type="checkbox"
                                name="submission"
                                id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="left">
                            <input
                                type="checkbox"
                                name="submission"
                                id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td
                            align="left">
                            <input
                                type="checkbox"
                                name="submission"
                                id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td
                            align="left">
                            <input
                                type="checkbox"
                                name="submission"
                                id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotaion</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td
                            align="left">
                            <input
                                type="checkbox"
                                name="submission"
                                id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                        </td>
                    </tr>

                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td
                            align="center"
                            valign="top"
                            colSpan={2}>
                            <label htmlFor="wd-assign-to">Assign Assign to</label>
                        </td>
                    </tr>

                    <tr>
                        <td
                            colSpan={2}
                            align="right">
                            <input
                                id="wd-assign-to"
                                defaultValue="Everyone" />
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td></td>
                        <td align="left">
                            <label htmlFor="wd-due-date">Due</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="left">
                            <input
                                type="date"
                                id="wd-due-date"
                                defaultValue="2024-05-13" />
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>

                    <tr>
                        <td></td>
                        <td align="left">
                            <label htmlFor="wd-available-from">Available from</label>
                        </td>
                        <td align="left">
                            <label htmlFor="wd-available-until">Until</label>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td align="left">
                            <input
                                type="date"
                                id="wd-available-from"
                                defaultValue="2024-05-13" />
                        </td>
                        <td align="left">
                            <input
                                type="date"
                                id="wd-available-until"
                                defaultValue="2024-05-13" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <div align="right">
                <button type="button" id="wd-save">Cancel</button>&nbsp;
                <button type="button" id="wd-cancel">Save</button>
            </div>

        </form >

    );
}