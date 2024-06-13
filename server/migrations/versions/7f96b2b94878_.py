"""empty message

Revision ID: 7f96b2b94878
Revises: 
Create Date: 2024-06-09 22:10:14.554776

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7f96b2b94878'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('role', sa.String(), nullable=True),
    sa.Column('profile_img', sa.String(), nullable=False),
    sa.Column('_hashed_password', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('dance_classes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('style', sa.String(), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.Column('start_time', sa.Time(), nullable=True),
    sa.Column('end_time', sa.Time(), nullable=True),
    sa.Column('class_img', sa.String(), nullable=True),
    sa.Column('teacher_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['teacher_id'], ['users.id'], name=op.f('fk_dance_classes_teacher_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('enrollments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('student_id', sa.Integer(), nullable=True),
    sa.Column('dance_class_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['dance_class_id'], ['dance_classes.id'], name=op.f('fk_enrollments_dance_class_id_dance_classes')),
    sa.ForeignKeyConstraint(['student_id'], ['users.id'], name=op.f('fk_enrollments_student_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('enrollments')
    op.drop_table('dance_classes')
    op.drop_table('users')
    # ### end Alembic commands ###