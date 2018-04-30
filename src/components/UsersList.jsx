import React from 'react'
import { isFetchedSlot, isFetching, fetchingData } from 'artemisa'
import { get } from 'artemisa/lib/core/call'

class UsersList extends React.Component {

    render() {
        const { users } = this.props
        return (
            <table className="table table-striped">
                <thead><tr><th>Id</th><th>Name</th><th>Created</th></tr></thead>
                <tbody>
                {isFetchedSlot(users) && (
                    users.value.map(u => (
                        <tr>
                            <td>{u._id}</td>
                            <td>{u.name}</td>
                            <td>{u.created_at}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        )
    }
}

export default fetchingData({
    users: () => get('api/users')
})(UsersList)
