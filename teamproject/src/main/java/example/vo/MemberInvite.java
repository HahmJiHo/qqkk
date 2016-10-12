package example.vo;

import java.io.Serializable;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class MemberInvite implements Serializable {
	private static final long serialVersionUID = 1L;
	static SimpleDateFormat format = new SimpleDateFormat("yyy-MM-dd");
	
	protected int no;
	protected int groupNo;
	protected int memberNo;
	protected int state;
	protected String name;
	protected String inviteEmail;
	protected Date createdDate;
	protected String createdDate2;

	public int getMemberNo() {
		return memberNo;
	}
	
	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}
	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public int getGroupNo() {
		return groupNo;
	}

	public void setGroupNo(int groupNo) {
		this.groupNo = groupNo;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public String getInviteEmail() {
		return inviteEmail;
	}

	public void setInviteEmail(String inviteEmail) {
		this.inviteEmail = inviteEmail;
	}

	public Date getCreatedDate() {
    return createdDate;
  }
  public void setCreatedDate(Date createdDate) {
    this.createdDate = createdDate;
    this.createdDate2 = format.format(createdDate);
  }
  public String getCreatedDate2() {
    return createdDate2;
  }
  public void setCreatedDate2(String str) {
    this.createdDate = Date.valueOf(str);
    this.createdDate2 = str;
  }
	
	
	
@Override
public String toString() {
	return "MemberInvite [no=" + no + ", groupNo=" + groupNo + ", state=" + state + ", inviteEmail=" + inviteEmail
			+ ", createdDate=" + createdDate + ", createdDate2=" + createdDate2 + "]";
}

	
}
