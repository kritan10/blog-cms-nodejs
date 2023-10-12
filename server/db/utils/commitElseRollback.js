/**
 *
 * @param {import("mysql2").Connection} connection
 *
 * @param {function} resolve
 *
 * @param {*} reject
 *
 * @param {*} blogInsertId
 */
export default function commitElseRollback(connection, resolve, reject, blogInsertId) {
	return connection.commit((err) => {
		if (err) connection.rollback((err) => reject(err));
		return resolve(blogInsertId);
	});
}
