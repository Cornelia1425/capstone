"""empty message

Revision ID: 7ae1f7844380
Revises: 14d3b9b8c536
Create Date: 2024-11-22 21:15:57.468911

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7ae1f7844380'
down_revision = '14d3b9b8c536'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('thekids', schema=None) as batch_op:
        batch_op.alter_column('country',
               existing_type=sa.INTEGER(),
               type_=sa.String(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('thekids', schema=None) as batch_op:
        batch_op.alter_column('country',
               existing_type=sa.String(),
               type_=sa.INTEGER(),
               existing_nullable=True)

    # ### end Alembic commands ###