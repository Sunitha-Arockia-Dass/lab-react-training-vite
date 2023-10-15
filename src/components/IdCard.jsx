function IdCard({lastName,firstName,gender,height,birth,picture}){
return (<div className="profile-card">
<div>
<img src={picture} alt="error" />
</div>
<div>

<p><strong>FirstName:</strong>{firstName}</p>
<p><strong>LastName:</strong>{lastName}</p>
<p><strong>Gender:</strong>{gender}</p>
<p><strong>Height:</strong>{height}</p>
<p><strong>BirthDate:</strong>{birth.toDateString()}</p>
</div>
</div>
  )

}

export default IdCard